<template>
    <section :class="$style.section">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img class="onlyDesktop" src="~/assets/img/bg-completed.jpg">
                <img class="onlyMobile" src="~/assets/img/bg-completed-mobile.jpg">
            </div>
        </div>
        <div :class="$style.man">
            <img class="onlyDesktop" src="~/assets/img/completed-doc.png">
            <img class="onlyMobile" src="~/assets/img/completed-doc-mobile.png">
        </div>
        <div :class="$style.content">
            <div :class="$style.contentInner">
                <div :class="$style.header">
                    <div :class="$style.headerTitle">
                        Коллега, вы ответили верно на&nbsp;{{ successCount }} вопрос из&nbsp;{{ questionLength }}.
                    </div>
                    <div :class="$style.headerDescription">
                        Давайте посмотрим на результаты.<br>
                        Если хотите испытать себя ещё раз, нажмите&nbsp;“Пройти&nbsp;снова”.
                    </div>
                    <div :class="$style.headerResults">
                        <div :class="$style.headerResultsRow">
                            <div :class="[$style.headerResultsCell, $style.isEmpty]" />
                            <div :class="[$style.headerResultsCell, $style.isHeader]">
                                Процент верных ответов
                            </div>
                            <div :class="[$style.headerResultsCell, $style.isHeader]">
                                Время прохождения
                            </div>
                        </div>
                        <div
                            v-for="item in result"
                            :key="item.position"
                            :class="[$style.headerResultsRow, {[$style.isUser]: item.isUser}]"
                        >
                            <div :class="[$style.headerResultsCell, {[$style.isTop]: [1,2,3].includes(item.position)}]">
                                <div :class="$style.headerResultsCellNumber">
                                    {{ item.position }}
                                </div>
                                <div :class="$style.headerResultsCellName">
                                    {{ item.user }}
                                </div>
                                <div v-if="[1,2,3].includes(item.position)" :class="$style.headerResultsCellCrown">
                                    <img v-if="item.position === 1" src="~/assets/img/crown-1.png">
                                    <img v-if="item.position === 2" src="~/assets/img/crown-2.png">
                                    <img v-if="item.position === 3" src="~/assets/img/crown-3.png">
                                </div>
                            </div>
                            <div :class="$style.headerResultsCell">
                                {{ item.percentage }}
                            </div>
                            <div :class="$style.headerResultsCell">
                                {{ item.duration_time }}
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="$style.footer">
                    <ButtonAction :class="$style.footerButton" title="Пройти другой квест" @handleClick="nextWay" />
                    <ButtonAction :class="$style.footerButton" preset="whiteWithoutIcon" title="Пройти снова" @handleClick="retry" />
                </div>
            </div>
        </div>
        <CompletedPopup :is-show="isShow" @handleClosed="closePopup" />
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import CompletedPopup from '~/components/CompletedBlock/components/CompletedPopup/index.vue'

export default {
    name: 'CompletedBlock',
    components: {
        CompletedPopup,
        ButtonAction
    },
    data: function () {
        return {
            isShow: false,
            table: [],
            userResult: {},
            timeNames: ['ч', 'мин', 'сек']
        }
    },
    async fetch () {
        try {
            const res = await this.$axios.get(`${this.$config.baseApiUrl}/api/sim/${this.currentTypeWay}/leaderboard/`, {
                headers: {
                    Authorization: `Bearer ${this.bearer}`
                }
            })

            if (res.status === 200 && res.data) {
                this.table = res.data.results
                this.userResult = res.data.current_user_result
            } else {
                throw new Error('Network error!')
            }
        } catch (e) {
            // eslint-disable-next-line
            console.log(e)
        }
    },
    computed: {
        mappedResult () {
            const currentPosition = this.userResult.position
            const userData = {
                ...this.userResult,
                user: this.userName,
                isUser: true
            }

            if (currentPosition > this.table.length) {
                return [...this.table, userData]
            }

            return [
                ...this.table.slice(0, currentPosition),
                userData,
                ...this.table.slice(currentPosition + 1)
            ]
        },
        result () {
            return this.mappedResult.map((item, index) => ({
                ...item,
                position: item.isUser && item.position ? item.position : index + 1,
                percentage: item.percentage ? item.percentage + '%' : '',
                duration_time: item.duration_time
                    ?.split(':')
                    ?.map((part, index) =>
                        part === '00' && index === 0 ? '' : part + (' ' + this.timeNames[index])
                    )
                    ?.join(' ')
                    ?.trim()
            }))
        },
        ...mapGetters({
            bearer: 'bearer',
            currentTypeWay: 'currentTypeWay',
            questionLength: 'questionsLength',
            successCount: 'successCount',
            userName: 'userName'
        })
    },
    mounted () {
        this.isShow = true
    },
    methods: {
        closePopup () {
            this.isShow = false
        },
        retry () {
            this.setCurrentWay(this.currentTypeWay)
        },
        ...mapMutations({
            nextWay: 'nextWay',
            setCurrentWay: 'setCurrentWay'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .bg {
        @include absoluteBlock;

        z-index: $zi-bg;

        &Inner {
            position: relative;
            width: 100%;
            height: 100%;

            img {
                @include absoluteCoverImg();

                @include mobile {
                    object-position: bottom;
                }
            }
        }
    }

    .man {
        position: absolute;
        bottom: 0;
        right: 0;
        pointer-events: none;
        z-index: $zi-content;
        width: rem(809);

        @include mobile {
            width: 100%;
        }
    }

    .content {
        position: relative;
        z-index: $zi-content;
        color: $c-white;
        height: 100%;

        @include wrapper;

        &Inner {
            padding: rem(130) rem(0) rem(86);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            width: rem(418);
            height: 100%;

            @include mobile {
                padding: rem(70) rem(0) rem(30);
                width: 100%;
            }
        }
    }

    .header {
        &Title {
            margin-top: rem(10);

            @include header-small;

            @include mobile {
                font-size: rem(30);
                margin-top: 0;
            }
        }

        &Description {
            margin-top: rem(12);
            width: rem(344);

            @include text;

            @include mobile {
                width: 100%;
                font-size: rem(16);
                margin-top: rem(5);
            }
        }

        &Results {
            width: rem(483);
            margin-top: rem(20);

            @include mobile {
                width: 100%;
            }

            &Row {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 100%;

                &:last-child {
                    .headerResultsCell {
                        border-bottom: none;
                    }
                }

                &.isUser {
                    background: rgba($c-white, 0.2);
                }
            }

            &Cell {
                display: flex;
                align-items: center;
                justify-content: center;
                width: calc(100% / 3);
                color: $c-white;
                padding: 0 2px;
                height: rem(28);
                border-left: 1px solid #6B616A;
                border-bottom: 1px solid #6B616A;

                @include text;

                @include mobile {
                    text-align: center;
                }

                &.isEmpty {
                    border: none;
                }

                &:first-child {
                    justify-content: flex-start;
                    font-weight: $fw-bold;
                    border-left: none;

                    @include mobile {
                        width: calc(130 * 100% / 366);
                    }
                }

                &:nth-child(2) {
                    @include mobile {
                        width: calc(102 * 100% / 366);
                    }
                }

                &:nth-child(3) {
                    @include mobile {
                        width: calc(134 * 100% / 366);
                    }
                }

                &.isHeader {
                    background: $c-white;
                    justify-content: center;
                    color: $c-black;

                    @include text-small($fw-bold);
                }

                .isUser & {
                    border-left-color: $c-white;
                }

                &Number {
                    flex: 0 0 auto;
                    width: rem(22);
                    height: rem(22);
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid $c-white;
                    margin-right: rem(8);
                    font-weight: $fw-regular;

                    .isTop & {
                        background: $c-white;
                        color: $c-red;
                    }
                }

                &Name {
                    flex: 0 0 auto;
                    font-weight: $fw-bold;
                    margin-right: rem(4);
                    max-width: calc(100% - rem(22) - rem(8));
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;

                    .isTop & {
                        max-width: calc(100% - rem(22) - rem(8) - rem(32));
                    }
                }

                &Crown {
                    flex: 0 0 auto;
                    width: rem(32);
                }
            }
        }
    }

    .footer {
        display: flex;

        @include mobile {
            flex-direction: column;
        }

        &Button {
            flex: 0 0 auto;
            margin-top: rem(28 + 28);
            margin-left: rem(20);

            &:first-child  {
                margin-left: 0;
            }

            @include mobile {
                margin-top: rem(10);
                width: 100%;
                margin-right: 0;
                margin-left: 0;
            }
        }
    }
</style>
