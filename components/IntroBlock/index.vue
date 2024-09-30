<template>
    <section :class="[$style.section, {[$style.isContinued]: isContinued}]">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img class="onlyDesktop" src="~/assets/img/intro/bg.jpg">
                <img :class="[$style.imageOne, 'onlyMobile']" src="~/assets/img/intro/bg-mobile.jpg">
                <img :class="[$style.imageTwo, 'onlyMobile']" src="~/assets/img/intro/bg-mobile-2.jpg">
            </div>
        </div>
        <div :class="$style.man">
            <img class="onlyDesktop" src="~/assets/img/doc.png">
            <img class="onlyMobile" src="~/assets/img/doc-mobile.png">
        </div>
        <div :class="$style.content">
            <div :class="$style.contentInner">
                <div :class="$style.contentFirst">
                    <div :class="$style.caption">
                        Я доктор и путешественник по мирам и реальностям
                    </div>
                    <div :class="$style.title">
                        Приглашаю вас в удивительное путешествие  в далекие миры, где мы изучим симптомы и триггеры заболеваний дыхательной системы
                    </div>
                    <ButtonAction :class="[$style.button, 'onlyMobile']" title="Продолжить" @handleClick="handleContinue" />
                </div>
                <div :class="$style.contentSecond">
                    <div :class="$style.text">
                        На протяжении маршрута наc будут консультировать эксперты
                    </div>
                    <div :class="$style.experts">
                        <div :class="$style.expert">
                            <div :class="$style.expertImage">
                                <img src="~/assets/img/expert-woman.png">
                            </div>
                            <div :class="$style.expertInfo">
                                <div :class="$style.expertInfoName">
                                    Курбачева<br>
                                    Оксана Михайловна
                                </div>
                                <div :class="$style.expertInfoPosition">
                                    Профессор, аллерголог, иммунолог, Заведующая отделением бронхиальной астмы
                                </div>
                            </div>
                        </div>
                        <div :class="$style.expert">
                            <div :class="$style.expertImage">
                                <img src="~/assets/img/expert-man.png">
                            </div>
                            <div :class="$style.expertInfo">
                                <div :class="$style.expertInfoName">
                                    Айсанов<br>
                                    Заурбек Рамазанович
                                </div>
                                <div :class="$style.expertInfoPosition">
                                    Д.м.н., профессор, заведующий кафедрой доказательной медицины РНИМУ
                                </div>
                            </div>
                        </div>
                    </div>
                    <ButtonAction :class="$style.button" title="Начать" @handleClick="startQuize" />
                </div>
            </div>
        </div>
        <NamePopup :is-show="isShow" @handleClosed="isShow = false" />
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import NamePopup from './components/NamePopup/index.vue'
import { types } from '~/utils/types'
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'IntroBlock',
    components: {
        ButtonAction,
        NamePopup
    },
    data: function () {
        return {
            isContinued: false,
            isShow: false
        }
    },
    computed: {
        types () {
            return types
        },
        ...mapGetters({
            userName: 'userName'
        })
    },
    mounted () {
        if (!this.userName) {
            this.isShow = true
        }
    },
    methods: {
        startQuize () {
            this.setTypeSection(types.chooseDoor)
        },
        handleContinue () {
            this.isContinued = true
        },
        ...mapMutations({
            setTypeSection: 'setTypeSection'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        height: 100%;
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

                &.imageTwo {
                    object-position: bottom;
                }
            }

            .imageOne {
                .isContinued & {
                    @include mobile {
                        display: none;
                    }
                }
            }

            .imageTwo {
                display: none;

                .isContinued & {
                    @include mobile {
                        display: block;
                    }
                }
            }
        }
    }

    .man {
        position: absolute;
        width: calc(793 * 100% / 1440);
        max-width: 45%;
        bottom: 0;
        left: 0;
        z-index: $zi-content;

        .isContinued & {
            @include mobile {
                display: none;
            }
        }

        @include mobile {
            width: rem(349);
            max-width: 100%;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    .content {
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: $c-white;
        z-index: $zi-content;

        @include wrapper;

        @include mobile {
            align-items: flex-start;
            justify-content: flex-start;
        }

        &Inner {
            position: relative;
            width: rem(590);

            @include mobile {
                width: 100%;
                height: 100%;
                padding: rem(75) 0 rem(30);
            }
        }

        &First {
            display: flex;
            flex-direction: column;

            @include mobile {
                flex-direction: column-reverse;
            }

            .isContinued & {
                @include mobile {
                    display: none;
                }
            }

            .caption {
                background-color: rgba($c-white, 0.2);
                padding: rem(10);
                width: fit-content;

                @include text();

                @include mobile {
                    @include text-small-italic();

                    background-color: transparent;
                    padding: 0;
                    margin-top: rem(5);
                    opacity: 0.7;
                    width: rem(193);
                }
            }

            .title {
                position: relative;
                margin-top: rem(20);

                @include header();

                @include mobile {
                    margin-top: 0;
                }

                &::before {
                    content: '«';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translate(-60%, -45%);
                    font-size: rem(120);
                    line-height: 1.2;
                    font-weight: $fw-extraBold;
                    opacity: 0.2;

                    @include mobile {
                        display: none;
                    }
                }
            }
        }

        &Second {
            margin-top: rem(44);

            @include mobile {
                margin-top: 0;
                display: none;
            }

            .isContinued & {
                @include mobile {
                    display: block;
                }
            }

            .text {
                width: rem(357);

                @include text();

                @include mobile {
                    width: rem(301);
                    font-size: rem(22);
                    line-height: 1.3;
                    font-weight: $fw-bold;
                }
            }

            .experts {
                margin-top: rem(17);
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                @include mobile {
                    margin-top: 0;
                }
            }

            .expert {
                display: flex;
                align-items: center;
                width: rem(274);

                @include mobile {
                    width: 100%;
                    margin-top: rem(15);
                }

                &Image {
                    flex: 0 0 auto;
                    width: rem(97);
                    margin-right: rem(6);

                    @include mobile {
                        width: rem(80);
                        margin-right: rem(10);
                    }
                }

                &Info {
                    @include mobile {
                        width: rem(230);
                    }

                    &Name {
                        white-space: nowrap;

                        @include text($fw-bold);
                    }

                    &Position {
                        @include text-small();

                        @include mobile {
                            margin-top: rem(2);
                        }
                    }
                }
            }
        }

        .button {
            margin-top: rem(44);
            margin-left: 0;

            @include mobile {
                position: absolute;
                bottom: rem(30);
                left: 0;
                width: 100%;
            }
        }
    }
</style>
