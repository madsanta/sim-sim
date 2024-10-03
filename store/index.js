import { types, ways } from '~/utils/types'
import dataQuize from '~/static/quize.json'

export const state = () => ({
    typeSection: types.helloIntro,
    currentTypeWay: '',
    isIntroShowed: false,
    indexChapter: 0,
    indexQuestion: 0,
    branch: {},
    user: {
        name: '',
        answers: [],
        bearer: '',
        successCount: 0,
        time: 0
    },
    bestPlayer: ''
})

export const getters = {
    bearer (state) {
        return state.user.bearer
    },
    typeSection (state) {
        return state.typeSection
    },
    currentTypeWay (state) {
        return state.currentTypeWay
    },
    isIntroShowed (state) {
        return state.isIntroShowed
    },
    indexQuestion (state) {
        return state.indexQuestion
    },
    intro (state) {
        return state.branch?.intro?.[state.indexChapter]
    },
    questionsLength (state) {
        return state.branch?.questions?.length
    },
    question (state) {
        return state.branch?.questions?.[state.indexQuestion]
    },
    userName (state) {
        return state.user.name
    },
    successCount (state) {
        return state.user.successCount
    },
    currentTime (state) {
        return state.user.time
    },
    bestPlayer (state) {
        return state.bestPlayer
    }
}

export const mutations = {
    setBearer (state, token) {
        state.user = {
            ...state.user,
            bearer: token
        }
    },
    setTypeSection (state, type) {
        state.isIntroShowed = false
        state.typeSection = type
    },
    setShowedIntro (state) {
        state.isIntroShowed = true
    },
    incrementIndexQuestion (state) {
        let indexQuestion = state.indexQuestion
        indexQuestion++

        state.indexQuestion = indexQuestion
    },
    setCurrentWay (state, way) {
        state.currentTypeWay = way
        state.branch = dataQuize.branches[way] ?? {}
        state.indexChapter = 0
        state.indexQuestion = 0
        state.user = {
            bearer: state.user.bearer,
            name: state.user.name,
            successCount: 0,
            time: 0,
            answers: []
        }
        this.commit('setTypeSection', this.getters.intro.type)
    },
    addAnswer (state, answer) {
        const answers = [...state.user.answers]

        answers.push(answer)

        state.user = {
            ...state.user,
            answers: [...answers]
        }
    },
    async nextQuestion (state) {
        if (this.getters.indexQuestion + 1 > this.getters.questionsLength - 1) {
            await this.dispatch('postResult')
            this.commit('setTypeSection', types.completed)

            return
        }

        this.commit('incrementIndexQuestion')

        if (!this.getters.intro.questions.includes(this.getters.indexQuestion + 1)) {
            state.indexChapter++
            this.commit('setTypeSection', this.getters.intro.type)
        }
    },
    nextWay (state) {
        const nextWay = ways.branch1 === state.currentTypeWay ? ways.branch2 : ways.branch1
        this.commit('setCurrentWay', nextWay)
    },
    setUserName (state, name) {
        state.user = {
            ...state.user,
            name
        }
    },
    incrementSuccesses (state) {
        let successCount = state.user.successCount
        successCount++

        state.user = {
            ...state.user,
            successCount
        }
    },
    incrementTime (state) {
        let time = state.user.time
        time++

        state.user = {
            ...state.user,
            time
        }
    },
    setBestPlayer (state, name) {
        state.bestPlayer = name
    }
}

export const actions = {
    async postResult ({ state }) {
        const percentage = this.getters.successCount / this.getters.questionsLength * 100

        try {
            await this.$axios.post(`${this.$config.baseApiUrl}/api/sim/quiz_result/`, {
                quiz: state.currentTypeWay,
                duration_time: Math.round(this.getters.currentTime / 10),
                percentage: Math.round(percentage * 100) / 100,
                answers: [...state.user.answers]
            }, {
                headers: {
                    Authorization: `Bearer ${state.user.bearer}`
                }
            })
        } catch (e) {
            // eslint-disable-next-line
            console.log(e)
        }
    },
    async fetchBestPlayer ({ state }) {
        try {
            const res = await this.$axios.get(`${this.$config.baseApiUrl}/api/sim/${this.getters.currentTypeWay}/top/`, {
                headers: {
                    Authorization: `Bearer ${state.user.bearer}`
                }
            })

            if (res.status === 200) {
                let user = ''

                if (res.data.user) {
                    user = res.data.user
                }

                this.commit('setBestPlayer', user)
            }
        } catch (e) {
            // eslint-disable-next-line
            console.log(e)
            this.commit('setBestPlayer', '')
        }
    }
}
