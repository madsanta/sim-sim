<template>
    <!-- eslint-disable vue/no-v-html -->
    <div :class="[$style.section, $style[type]]">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img class="onlyDesktop" :src="require(`~/assets/img/${type}/question-bg.jpg`)">
                <img class="onlyMobile" :src="require(`~/assets/img/${type}/question-bg-mobile.jpg`)">
            </div>
        </div>
        <div :class="[$style.wrapper, $style[status]]">
            <div :class="$style.content">
                <ProgressBar :class="$style.progress" :way="currentTypeWay" :progress="numberQuestion" />
                <div :class="$style.question">
                    <div :class="[$style.questionBg, 'onlyDesktop']">
                        <img :src="require('~/assets/img/key-shadow-bg.png')">
                    </div>
                    <div :class="$style.questionHeader">
                        <div :class="$style.questionPagination">
                            <span>Вопрос 0{{ numberQuestion }}</span>/0{{ questionsLength }}
                        </div>
                        <div v-if="status !== questionStatus.success" :class="$style.questionTitle" v-html="question.title" />
                        <div v-if="status !== questionStatus.success" :class="$style.questionDescription" v-html="question.description" />
                    </div>
                    <div v-if="status !== questionStatus.success" :class="$style.questionAnswers">
                        <div :class="[$style.questionAnswersWrapper, {[$style.isColumns]: question.answers.length > 6}]">
                            <div
                                v-for="(q, index) in question.answers"
                                :key="index"
                                :class="[
                                    $style.questionAnswer,
                                    $style[questionType],
                                    {
                                        [$style.checked]: !!currentAnswers[index]
                                    }
                                ]"
                                @click="chooseAnswer(index)"
                            >
                                <div :class="$style.questionAnswerIcon">
                                    <IconChecked v-if="questionType === 'checkbox'" />
                                </div>
                                <div :class="$style.questionAnswerTitle" v-html="q.title" />
                            </div>
                        </div>
                        <div
                            v-if="question.caption"
                            :class="$style.questionFooter"
                            v-html="question.caption"
                        />
                    </div>
                    <div v-if="question.success.title && status === questionStatus.success" :class="$style.questionSuccess">
                        <div :class="$style.questionSuccessTitle">
                            {{ question.success.title }}
                        </div>
                        <div :class="$style.questionSuccessDescription" v-html="question.success.description" />
                        <div class="onlyDesktop" :class="$style.questionSuccessKey">
                            <img :src="require(`~/assets/img/${type}/key.png`)">
                        </div>
                    </div>
                </div>
                <div :class="$style.buttons">
                    <template v-if="status !== questionStatus.success">
                        <ButtonAction :class="$style.button" :is-disable="!userAnswersLength" title="Ответить" @handleClick="sendAnswers" />
                        <ButtonAction
                            v-for="(data, index) in question.extraData"
                            :key="index"
                            :class="$style.button"
                            preset="white"
                            :title="data.titleButton"
                            @handleClick="openTip(data)"
                        />
                    </template>
                    <ButtonAction v-if="status === questionStatus.success" :class="$style.button" title="Продолжить" @handleClick="onContinue" />
                </div>
            </div>
            <div :class="$style.door">
                <div :class="$style.doorInner">
                    <img :class="[$style.doorStart, 'onlyDesktop']" :src="require(`~/assets/img/${type}/door-${numberQuestion}.png`)">
                    <img v-if="question.success.title" :class="[$style.doorSuccess, 'onlyDesktop']" :src="require(`~/assets/img/${type}/door-${numberQuestion}-success.png`)">
                    <img v-if="question.success.title" :class="[$style.doorSuccess, 'onlyMobile']" :src="require(`~/assets/img/${type}/door-${numberQuestion}-success-mobile.png`)">
                </div>
            </div>
        </div>
        <ModalVideo
            :is-show="isShowVideo"
            :title="status !== questionStatus.failed ? 'Ответ верный!' : 'Ответ неверный!'"
            :src="question.success.video"
            @handleClosed="closeVideo"
        />
        <TipPopup
            :is-show="isShowTip"
            :title="tip?.title"
            :description="tip?.description"
            :chapter="type"
            :need-scroll="tip?.needScroll"
            :content="tip?.content"
            @handleClosed="closeTip"
        />
    </div>
    <!-- eslint-enable -->
</template>

<script>
import { mapMutations } from 'vuex'
import ProgressBar from '~/components/common/ProgressBar/index.vue'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import ModalVideo from '~/components/common/ModalVideo/index.vue'
import IconChecked from '~/assets/svg/icon-checked.svg'
import { questionStatus } from '~/utils/types'
import TipPopup from '~/components/QuizeBlock/components/TipPopup/index.vue'

export default {
    name: 'QuizeMain',
    components: {
        TipPopup,
        ButtonAction,
        ProgressBar,
        ModalVideo,
        IconChecked
    },
    props: {
        type: {
            type: String,
            required: true
        },
        currentTypeWay: {
            type: String,
            required: true
        },
        indexQuestion: {
            type: Number,
            required: true
        },
        questionsLength: {
            type: Number,
            required: true
        },
        question: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            isShowVideo: false,
            isShowTip: false,
            status: questionStatus.initial,
            currentAnswers: {},
            answers: [],
            tip: null,
            idTimer: 0
        }
    },
    computed: {
        numberQuestion () {
            return this.indexQuestion + 1
        },
        userAnswersLength () {
            return Object.keys(this.currentAnswers).length
        },
        questionStatus () {
            return questionStatus
        },
        questionType () {
            return this.question.type
        }
    },
    mounted () {
        this.continueTime()
    },
    destroyed () {
        this.pauseTime()
    },
    methods: {
        chooseAnswer (index) {
            const answers = this.questionType === 'checkbox' ? { ...this.currentAnswers } : {}

            if (!answers[index]) {
                answers[index] = {
                    id: index,
                    title: this.question.answers?.[index]?.title,
                    isCorrect: this.question.answers?.[index]?.isCorrect
                }
            } else {
                delete answers[index]
            }

            this.currentAnswers = { ...answers }
        },
        sendAnswers () {
            const answers = Object.values(this.currentAnswers)
            const correctAnswers = Object.values(this.question.answers).filter(answer => answer.isCorrect)
            const onlyCorrectUserAnswers = answers.every(answer => answer.isCorrect)

            this.addAnswer({
                question: this.question.title,
                answer: answers.map(answer => answer.title)
            })

            this.pauseTime()

            if (onlyCorrectUserAnswers && answers.length === correctAnswers.length) {
                this.incrementSuccesses()
            } else {
                this.status = questionStatus.failed
            }

            this.openVideo()
        },
        async onContinue () {
            this.continueTime()

            this.status = questionStatus.initial
            this.isShowVideo = false
            this.currentAnswers = {}

            await this.nextQuestion()
        },
        openVideo () {
            this.isShowVideo = true
        },
        closeVideo () {
            this.isShowVideo = false

            if (this.question.success.title) {
                this.status = questionStatus.success
            } else {
                this.onContinue()
            }
        },
        openTip (tip) {
            this.tip = {
                title: tip.title ? tip.title : undefined,
                description: tip.description ? tip.description : undefined,
                needScroll: !!tip.needScroll,
                content: tip.content
            }

            this.isShowTip = true
        },
        closeTip () {
            this.isShowTip = false
            this.tip = {}
        },
        continueTime () {
            this.idTimer = setInterval(() => {
                this.incrementTime()
            }, 100) // 1/10 секунды
        },
        pauseTime () {
            clearInterval(this.idTimer)
        },
        ...mapMutations({
            incrementSuccesses: 'incrementSuccesses',
            nextQuestion: 'nextQuestion',
            addAnswer: 'addAnswer',
            incrementTime: 'incrementTime'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .bg {
        @include absoluteBlock;

        &Inner {
            position: relative;
            width: 100%;
            height: 100%;

            img {
                @include absoluteCoverImg();
            }
        }
    }

    .wrapper {
        @include wrapper;

        z-index: $zi-content;
        height: 100%;
        display: flex;
        align-items: flex-end;

        @include mobile {
            .failed &,
            .success & {
                height: 100%;
            }
        }
    }

    .content {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: rem(616);
        padding: rem(83) 0 rem(86);
        height: 100%;

        @include mobile {
            position: relative;
            width: 100%;
            padding: rem(70) 0 rem(30);
        }
    }

    .door {
        flex: 0 0 auto;
        margin-left: rem(107);
        width: rem(607);
        max-height: 100%;
        pointer-events: none;

        @include mobile {
            position: absolute;
            width: 100%;
            height: 100%;
            max-height: rem(670);
            margin-left: 0;
            bottom: 0;
            left: 0;
        }

        &Inner {
            @include mobile {
                position: relative;
                width: 100%;
                height: 100%;

                img {
                    @include absoluteCoverImg(contain);

                    object-position: bottom;
                }
            }
        }

        &Start {
            display: none;

            .initial & {
                display: block;
            }
        }

        &Failed {
            display: none;

            .failed & {
                display: block;
            }
        }

        &Success {
            display: none;

            .success & {
                display: block;
            }
        }
    }

    .progress {
        padding-bottom: rem(24);

        @include mobile {
            position: absolute;
            right: rem(15);
            top: rem(76);
            padding-bottom: 0;
            z-index: 2;

            .failed &,
            .success & {
                display: none;
            }
        }
    }

    .question {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: rem(582);
        max-height: rem(367);
        background-color: $c-white;
        padding: 0 rem(45) rem(10) rem(30);

        @include mobile {
            width: 100%;
            padding: rem(15);
            max-height: rem(533);
            min-height: rem(246);
            margin-top: rem(37);

            .failed &,
            .success & {
                background: transparent;
                padding: 0;
                margin-top: 0;
                min-height: initial !important;
            }
        }

        .initial & {
            width: 100%;
        }

        .failed &,
        .success & {
            min-height: rem(337);
        }

        &Bg {
            position: absolute;
            bottom: 0;
            right: 0;
            width: rem(203);
            pointer-events: none;
            display: none;

            .success & {
                display: block;
            }
        }

        &Header {
            padding-right: rem(63 - 45);
            color: $c-black;

            @include mobile {
                padding-right: 0;
                margin-top: rem(-15 - 37);

                .failed &,
                .success & {
                    display: none;
                }
            }
        }

        &Pagination {
            flex: 0 0 auto;
            background-color: #E3E3E3;
            padding: rem(10);
            width: fit-content;
            margin-top: rem(-14);

            @include text-big;

            font-weight: $fw-light;

            @include mobile {
                font-size: rem(16);
                width: calc(100% + rem(30));
                margin-left: rem(-15);
                margin-top: 0;
                background-color: rgba($c-black, 0.3);
                color: $c-white;
                padding: rem(9) rem(15);
            }

            span {
                font-weight: $fw-semiBold;
            }
        }

        &Title {
            margin-top: rem(8);
            font-size: rem(22);
            line-height: 1.2;
            font-weight: $fw-bold;

            @include mobile {
                margin-top: rem(15);
            }
        }

        &Description {
            font-size: rem(18);
            line-height: 1.2;

            @include mobile {
                margin-top: rem(5);
                font-size: rem(14);
            }
        }

        &Answers {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow-y: auto;
            height: 100%;
            margin-top: rem(10);

            @include mobile {
                justify-content: flex-start;
            }

            &Wrapper {
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: rem(12);
                grid-row-gap: rem(13);
                margin-top: auto;
                margin-bottom: auto;

                @include mobile {
                    grid-row-gap: rem(10);
                }

                &.isColumns {
                    grid-template-columns: rem(263) rem(263);

                    @include mobile {
                        grid-template-columns: 1fr;
                    }
                }
            }
        }

        &Answer {
            display: flex;
            cursor: pointer;

            @include desktop {
                &:hover {
                    .questionAnswerIcon {
                        border-color: $c-red;
                    }

                    .questionAnswerTitle {
                        color: $c-black;
                    }
                }
            }

            &.checked {
                .questionAnswerIcon {
                    border-color: $c-red;

                    &:after {
                        opacity: 1;
                    }

                    svg {
                        opacity: 1;
                    }
                }

                .questionAnswerTitle {
                    color: $c-black;
                }
            }

            &Icon {
                position: relative;
                flex: 0 0 auto;
                width: rem(20);
                height: rem(20);
                border: 1px solid #868686;
                transition: border-color 0.2s;

                @include mobile {
                    width: rem(18);
                    height: rem(18);
                }

                &::after {
                    content: '';
                    opacity: 0;
                    width: rem(10);
                    height: rem(10);
                    border-radius: 100%;
                    background-color: $c-red;
                    transition: opacity 0.2s;

                    @include mobile {
                        width: rem(8);
                        height: rem(8);
                    }

                    @include absoluteCentredBlock();

                }

                .checkbox & {
                    border-radius: rem(3);

                    &::after {
                        display: none;
                    }
                }

                .radio & {
                    border-radius: 100%;
                }

                svg {
                    opacity: 0;
                    width: rem(11);
                    transition: opacity 0.2s;

                    @include absoluteCentredBlock();

                    @include mobile {
                        width: rem(10);
                    }
                }
            }

            &Title {
                margin-left: rem(14);
                color: #868686;
                font-size: rem(18);
                line-height: 1.2;
                transition: color 0.2s;

                @include mobile {
                    font-size: rem(16);
                    margin-left: rem(12);
                }
            }
        }

        &Footer {
            color: $c-black;
            font-size: rem(10);
            line-height: 1.2;
            font-style: italic;
            margin-top: auto;
            padding-top: rem(15);

            @include mobile {
                padding-top: 0;
                margin-top: rem(15);
            }
        }

        &Failed {
            margin-top: auto;
            margin-bottom: auto;

            &Title {
                color: $c-red;

                @include header-big;

                @include mobile {
                    color: $c-white;
                }
            }

            &Description {
                color: $c-black;
                margin-top: rem(2);

                @include header-small;

                font-weight: $fw-regular;

                @include mobile {
                    margin-top: rem(5);
                    color: $c-white;
                }
            }
        }

        &Success {
            margin-top: auto;
            margin-bottom: auto;

            &Title {
                color: $c-black;

                @include header-big;

                @include mobile {
                    color: $c-white;
                }
            }

            &Description {
                color: $c-black;
                margin-top: rem(2);

                @include header-small;

                font-weight: $fw-regular;

                @include mobile {
                    margin-top: rem(5);
                    color: $c-white;
                }

                span {
                    font-weight: $fw-bold;
                }
            }

            &Key {
                position: absolute;
                right: rem(-109);
                bottom: rem(-138);
                width: rem(373);
                pointer-events: none;
            }
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;

        @include mobile {
            flex-direction: column-reverse;
        }
    }

    .button {
        flex: 0 0 auto;
        position: relative;
        margin-left: rem(30);
        margin-right: 0;
        z-index: 10;

        &:first-child {
            margin-left: 0;
        }

        @include mobile {
            width: 100%;
            margin-left: 0;
            margin-top: rem(20);
        }
    }
</style>
