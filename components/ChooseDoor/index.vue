<template>
    <section :class="[$style.section, $style[way]]">
        <div :class="$style.bg">
            <div :class="$style.bgInner">
                <img :class="[$style.image, 'onlyDesktop']" src="~/assets/img/chooseDoor/bg-desktop.jpg">
                <img :class="[$style.branch1, 'onlyDesktop']" src="~/assets/img/chooseDoor/bg-desktop-open-blue.jpg">
                <img :class="[$style.branch2, 'onlyDesktop']" src="~/assets/img/chooseDoor/bg-desktop-open-red.jpg">
                <img :class="[$style.image, 'onlyMobile']" src="~/assets/img/chooseDoor/bg-mobile.jpg">
                <img :class="[$style.branch1, 'onlyMobile']" src="~/assets/img/chooseDoor/bg-mobile-open-blue.jpg">
                <img :class="[$style.branch2, 'onlyMobile']" src="~/assets/img/chooseDoor/bg-mobile-open-red.jpg">
            </div>
        </div>
        <div :class="$style.content">
            <div :class="$style.contentInner">
                <div :class="$style.intro">
                    <div :class="[$style.caption, 'onlyDesktop']">
                        Выбор истории
                    </div>
                    <div :class="[$style.caption, 'onlyMobile']">
                        Выберите дверь
                    </div>
                    <div :class="[$style.title, 'onlyDesktop']">
                        Коллега,<br>
                        выберите дверь
                    </div>
                    <div :class="[$style.title, 'onlyMobile']">
                        Коллега, выбор<br>
                        истории за вами
                    </div>
                </div>
                <div :class="[$style.way, $style.branch1]">
                    <div :class="$style.caption">
                        Выбор истории за вами:
                    </div>
                    <div :class="$style.title">
                        <span>Первая история</span> о пациентке 36&nbsp;лет&nbsp;с&nbsp;жалобами на насморк, малопродуктивный кашель и&nbsp;общую слабость.
                    </div>
                    <div :class="$style.description">
                        В этом путешествии наc будет консультировать
                    </div>
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
                </div>
                <div :class="[$style.way, $style.branch2]">
                    <div :class="$style.caption">
                        Выбор истории за вами:
                    </div>
                    <div :class="$style.title">
                        <span>Вторая история</span> о пациенте 30 лет с жалобами на затруднение дыхания, одышку при физической нагрузке и&nbsp;заложенность носа.
                    </div>
                    <div :class="$style.description">
                        В этом путешествии наc будет консультировать
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
                <ButtonAction :class="$style.button" :is-disable="!way" title="Начать" @handleClick="startQuize" />
            </div>
        </div>
        <div :class="$style.choose">
            <div :class="$style.chooseIcon">
                <IconEnter :class="[$style.chooseIconEnter, $style.choose1]" @click="chooseDoor(ways.branch1)" />
                <IconClose :class="[$style.chooseIconClose, $style.choose1]" @click="chooseDoor('')" />
            </div>
            <div :class="$style.chooseIcon">
                <IconEnter :class="[$style.chooseIconEnter, $style.choose2]" @click="chooseDoor(ways.branch2)" />
                <IconClose :class="[$style.chooseIconClose, $style.choose2]" @click="chooseDoor('')" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { types, ways } from '~/utils/types'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconEnter from '~/assets/svg/icon-enter-circle.svg'
import IconClose from '~/assets/svg/icon-close-circle.svg'

export default {
    name: 'ChooseDoor',
    components: {
        ButtonAction,
        IconEnter,
        IconClose
    },
    data: function () {
        return {
            way: '' // branch1 || branch2
        }
    },
    computed: {
        types () {
            return types
        },
        ways () {
            return ways
        }
    },
    methods: {
        startQuize () {
            this.setCurrentWay(this.way)
        },
        chooseDoor (door) {
            this.way = door
        },
        ...mapMutations({
            setCurrentWay: 'setCurrentWay'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        height: 100%;
        overflow: hidden;

        .branch1 {
            display: none;
        }

        .branch2 {
            display: none;
        }

        &.branch1 {
            .branch1 {
                display: block;
            }

            .branch2,
            .image,
            .intro {
                display: none;
            }
        }

        &.branch2 {
            .branch2 {
                display: block;
            }

            .branch1,
            .image,
            .intro {
                display: none;
            }
        }
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
        height: 100%;
        display: flex;
        align-items: center;
        color: $c-white;
        z-index: $zi-content;

        @include wrapper;

        &Inner {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: rem(440);
            margin-bottom: rem(19);

            @include mobile {
                width: 100%;
                height: 100%;
                padding: rem(70) 0 rem(30);
                margin-bottom: 0;
            }
        }
    }

    .intro {
        display: flex;
        flex-direction: column;
        padding-top: rem(113);

        @include mobile {
            padding-top: 0;
            flex-direction: column-reverse;
        }

        .caption {
            padding: rem(10);
            background-color: rgba($c-white, 0.2);
            width: fit-content;

            @include text();

            @include mobile {
                font-size: rem(16);
                background-color: transparent;
                padding: 0;
                margin-top: rem(1);
            }
        }

        .title {
            margin-top: rem(19);

            @include header-big;

            @include mobile {
                margin-top: 0;
            }
        }
    }

    .way {
        width: rem(495);

        @include mobile {
            width: 100%;
        }

        .caption {
            padding: rem(10);
            background-color: rgba($c-white, 0.2);
            width: fit-content;

            @include text();

            @include mobile {
                display: none;
            }
        }

        .title {
            margin-top: rem(19);

            @include header-small;

            @include mobile {
                margin-top: 0;
            }

            span {
                @include mobile {
                    display: block;
                    font-size: rem(30);
                }

                .branch1 & {
                    color: #94BEE7;
                }

                .branch2 & {
                    color: #D696A0;
                }
            }
        }

        .description {
            margin-top: rem(20);

            @include text;
        }

        .expert {
            display: flex;
            align-items: center;
            width: rem(312);
            margin-top: rem(17);

            @include mobile {
                width: 100%;
                margin-top: rem(10);
            }

            &Image {
                flex: 0 0 auto;
                width: rem(97);
                margin-right: rem(10);

                @include mobile {
                    width: rem(70);
                    margin-right: rem(6);
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
                }
            }
        }
    }

    .button {
        margin-left: 0;

        @include mobile {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: rem(30);
        }
    }

    .choose {
        position: absolute;
        width: rem(326);
        bottom: rem(62);
        right: rem(270);
        display: flex;
        justify-content: space-between;
        z-index: $zi-content;

        @include mobile {
            width: rem(169);
            bottom: rem(98);
            right: 50%;
            transform: translate(50%, 0);
        }

        &Icon {
            position: relative;
            width: rem(48);
            height: rem(48);
            cursor: pointer;

            @include mobile {
                width: rem(38);
                height: rem(38);
            }

            svg {
                stroke: $c-white;
            }

            &Enter,
            &Close {
                @include absoluteBlock;
            }

            &Enter {
                .branch1 &.choose1,
                .branch2 &.choose2 {
                    display: none;
                }
            }

            &Close {
                display: none;

                .branch1 &.choose1,
                .branch2 &.choose2 {
                    display: block;
                }
            }
        }
    }
</style>
