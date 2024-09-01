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
        successCount: 0,
        startTime: 0,
        endTime: 0
    }
})

export const getters = {
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
    startTime (state) {
        return state.user.startTime
    },
    endTime (state) {
        return state.user.endTime
    }
}

export const mutations = {
    setTypeSection (state, type) {
        state.isIntroShowed = false
        state.typeSection = type
    },
    setShowedIntro (state) {
        state.isIntroShowed = true
    },
    setCurrentWay (state, way) {
        state.currentTypeWay = way
        state.branch = dataQuize.branches[way] ?? {}
        state.indexChapter = 0
        state.indexQuestion = 0
        this.commit('setTypeSection', this.getters.intro.type)
    },
    nextQuestion (state) {
        state.indexQuestion++

        if (state.indexQuestion > this.getters.questionsLength - 1) {
            this.commit('setTypeSection', types.completed)
            return
        }

        if (!this.getters.intro.questions.includes(state.indexQuestion + 1)) {
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
        state.user = {
            ...state.user,
            successCount: state.user.successCount++
        }
    },
    start (state) {
        state.user = {
            ...state.user,
            startTime: +new Date(),
            successCount: 0,
            endTime: 0
        }
    },
    end (state) {
        state.user = {
            ...state.user,
            endTime: +new Date()
        }
    }
}
