<template>
    <!-- eslint-disable vue/no-v-html -->
    <div :class="[$style.section, $style[type]]">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img class="onlyDesktop" :src="require(`~/assets/img/${type}/intro-bg.jpg`)">
                <img class="onlyMobile" :src="require(`~/assets/img/${type}/intro-bg-mobile.jpg`)">
            </div>
        </div>
        <div :class="$style.content">
            <div :class="$style.contentInner">
                <div :class="$style.block">
                    <div :class="$style.title" v-html="title" />
                    <div :class="$style.description" v-html="description" />
                </div>
                <ButtonAction v-if="!video" :class="[$style.button, 'onlyMobile']" title="Продолжить" @handleClick="onContinue" />
                <ButtonAction v-if="video" :class="[$style.button, 'onlyMobile']" title="Слушать" @handleClick="openVideo" />
            </div>
        </div>
        <div :class="[$style.nav, 'onlyDesktop']">
            <div :class="$style.navInner">
                <ButtonAction v-if="!video" :class="[$style.button, 'onlyDesktop']" title="Продолжить" @handleClick="onContinue" />
                <ProgressBar :way="currentTypeWay" :progress="indexQuestion + 2" />
            </div>
        </div>
        <div v-if="video" :class="$style.listen">
            <div :class="$style.listenInner">
                <div :class="$style.listenIcon">
                    <div :class="$style.listenIconCircleOne" />
                    <div :class="$style.listenIconCircleTwo" />
                    <div :class="$style.listenIconChar">
                        C
                    </div>
                </div>
                <div :class="$style.listenText">
                    На связи профессор {{ expert }}
                </div>
                <ButtonAction :class="[$style.listenButton, 'onlyDesktop']" title="Слушать" @handleClick="openVideo" />
            </div>
        </div>
        <ModalVideo
            :is-show="isShow"
            :src="video"
            @handleClosed="closeVideo"
        />
    </div>
    <!-- eslint-enable -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { types } from '~/utils/types'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import ProgressBar from '~/components/common/ProgressBar/index.vue'
import ModalVideo from '~/components/common/ModalVideo/index.vue'

export default {
    name: 'QuizeIntro',
    components: {
        ModalVideo,
        ButtonAction,
        ProgressBar
    },
    props: {
        type: {
            type: String,
            required: true
        },
        currentTypeWay: {
            type: String,
            required: true
        }
    },
    data: function () {
        return {
            isShow: false
        }
    },
    computed: {
        ...mapGetters({
            intro: 'intro',
            indexQuestion: 'indexQuestion'
        }),
        title () {
            return this.intro.title
        },
        description () {
            return this.intro.description
        },
        expert () {
            return this.intro.expert
        },
        video () {
            return this.intro.video || ''
        },
        types () {
            return types
        }
    },
    methods: {
        onContinue () {
            this.start()
            this.setShowedIntro()
        },
        openVideo () {
            this.isShow = true
        },
        closeVideo () {
            this.isShow = false
            this.setShowedIntro()
        },
        ...mapMutations({
            start: 'start',
            setShowedIntro: 'setShowedIntro'
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

    .content {
        flex: 0 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $c-white;
        z-index: $zi-content;

        @include wrapper;

        &Inner {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: rem(19);

            @include mobile {
                width: 100%;
                height: 100%;
                padding: rem(70) 0 rem(30);
                margin-bottom: 0;
            }
        }

        .block {
            width: rem(515);

            @include mobile {
                width: 100%;

                br {
                    display: none;
                }
            }

            .title {
                @include header-small;

                @include mobile {
                    font-size: rem(30);
                }
            }

            .description {
                margin-top: rem(10);
                font-size: rem(18);
                line-height: 1.2;

                @include mobile {
                    font-size: rem(16);
                    margin-top: rem(5);
                }
            }
        }
    }

    .nav {
        left: 0;
        bottom: 0;
        z-index: $zi-content;

        @include wrapper;

        position: absolute;

        &Inner {
            margin-bottom: rem(60);
        }

        .button {
            margin-bottom: rem(91);
            margin-left: 0;
        }
    }

    .listen {
        width: rem(196);
        height: rem(196);
        color: $c-white;
        z-index: $zi-content;
        right: rem(270);

        @include absoluteCentredBlock('vertical');

        @include mobile {
            width: rem(146);
            height: rem(146);
            right: 50%;

            @include absoluteCentredBlock();
        }

        &Inner {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        &Icon {
            flex: 0 0 auto;
            position: relative;
            width: 100%;
            height: 100%;

            &CircleOne {
                border: 4px solid #92D6FF;
                filter: blur(rem(10));
                width: 100%;
                height: 100%;
                border-radius: 100%;

                @include absoluteCentredBlock();
            }

            &CircleTwo {
                border: 4px solid #22ABFE;
                filter: blur(rem(14));
                width: 100%;
                height: 100%;
                border-radius: 100%;

                @include absoluteCentredBlock();
            }

            &Char {
                position: absolute;
                top: rem(-16);
                left: rem(27);
                font-size: rem(189);
                font-weight: $fw-black;

                @include mobile {
                    top: rem(-12);
                    left: rem(20);
                    font-size: rem(140);
                }
            }
        }

        &Text {
            text-align: center;
            white-space: nowrap;
            position: absolute;
            bottom: rem(-20);
            transform: translate(0, 100%);

            @include header-small;

            @include mobile {
                white-space: normal;
                bottom: rem(-22);
                width: rem(220);
            }
        }

        &Button {
            position: absolute;
            bottom: rem(-66);
            transform: translate(0, 100%);

            @include mobile {

            }
        }
    }

    .button {
        @include mobile {
            margin-left: 0;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: rem(30);
        }
    }
</style>
