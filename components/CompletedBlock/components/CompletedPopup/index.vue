<template>
    <Teleport v-if="isShow" to="#modals">
        <div :class="$style.popupWrapper">
            <div :class="$style.popupOverlay" />
            <div :class="$style.popup">
                <div :class="$style.popupInner">
                    <div :class="$style.popupClose" @click="closeModal">
                        <IconClose />
                    </div>
                    <div :class="$style.popupContent">
                        <div :class="$style.popupTitle">
                            На просторах вселенных мы нашли интересное приложение <span>ProPulmo</span>
                        </div>
                        <div :class="$style.popupItems">
                            <div :class="$style.popupItem">
                                <div :class="$style.popupItemIcon">
                                    <Icon1 />
                                </div>
                                <div :class="$style.popupItemText">
                                    <b>Алгоритмы и калькуляторы</b> для диагностики БА и ХОБЛ, оценки уровня контроля БА
                                </div>
                            </div>
                            <div :class="$style.popupItem">
                                <div :class="$style.popupItemIcon">
                                    <Icon2 />
                                </div>
                                <div :class="$style.popupItemText">
                                    Доступ к алгоритмам и калькуляторам <b>без выхода в интернет и в авиа-режиме</b>
                                </div>
                            </div>
                            <div :class="$style.popupItem">
                                <div :class="$style.popupItemIcon">
                                    <Icon3 />
                                </div>
                                <div :class="$style.popupItemText">
                                    Все алгоритмы основаны на утвержденных <b>клинических рекомендациях</b>
                                </div>
                            </div>
                            <div :class="$style.popupItem">
                                <div :class="$style.popupItemIcon">
                                    <Icon4 />
                                </div>
                                <div :class="$style.popupItemText">
                                    Вся необходимая для врача информация <b>всегда под рукой</b>
                                </div>
                            </div>
                        </div>
                        <div :class="$style.popupCaption">
                            БА — бронхиальная астма; ХОБЛ — хроническая обструктивная болезнь легких.
                        </div>
                    </div>
                    <div :class="$style.popupImages">
                        <div :class="[$style.popupImagesLogo, 'onlyDesktop']">
                            <img src="~/assets/img/propulmo.png">
                        </div>
                        <ButtonAction :class="[$style.button, 'onlyMobile']" title="Скачать в App Store" preset="app" />
                        <ButtonAction :class="[$style.button, 'onlyMobile']" title="Скачать в Google Play" preset="google" />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import modal from '~/mixins/modal'
import IconClose from '~/assets/svg/icon-close-circle.svg'
import Icon1 from '~/assets/svg/icon-completed-1.svg'
import Icon2 from '~/assets/svg/icon-completed-2.svg'
import Icon3 from '~/assets/svg/icon-completed-3.svg'
import Icon4 from '~/assets/svg/icon-completed-4.svg'

export default {
    name: 'CompletedPopup',
    components: {
        ButtonAction,
        Teleport,
        IconClose,
        Icon1,
        Icon2,
        Icon3,
        Icon4
    },
    mixins: [modal]
}
</script>

<style module lang="scss">
    .popupWrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .popupOverlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($c-black, 0.5);
    }

    .popup {
        left: rem(120);
        width: rem(778);

        @include absoluteCentredBlock('vertical');

        @include mobile {
            top: rem(70);
            left: rem(12);
            right: rem(12);
            width: calc(100% - rem(24));
            max-height: calc(100svh - rem(82));
            transform: none;
            overflow-y: auto;
        }

        &Inner {
            background: $c-white;
            color: $c-black;
            padding: rem(36) rem(27) rem(15);

            @include mobile {
                padding: rem(15) rem(15) rem(30);
            }
        }

        &Close {
            position: absolute;
            top: rem(20);
            right: rem(20);
            width: rem(48);
            height: rem(48);
            z-index: 1;
            cursor: pointer;

            @include mobile {
                top: rem(12);
                right: rem(12);
                width: rem(40);
                height: rem(40);
            }

            svg {
                stroke: $c-black;
            }
        }

        &Content {
            width: rem(450);

            @include mobile {
                width: 100%;
            }
        }

        &Title {
            font-size: rem(35);
            line-height: 1.2;
            font-weight: $fw-bold;

            @include mobile {
                width: calc(100% - rem(40));
                font-size: rem(22);
            }

            span {
                font-weight: $fw-extraBold;
                color: #32872F;

                @include mobile {
                    font-weight: $fw-bold;
                }
            }
        }

        &Items {
            margin-top: rem(18);

            @include mobile {
                margin-top: rem(19);
            }
        }

        &Item {
            width: 100%;
            display: flex;
            margin-bottom: rem(10);

            @include mobile {
                margin-bottom: rem(20);
            }

            &Icon {
                flex: 0 0 auto;
                width: rem(50);
                height: rem(50);
                margin-right: rem(10);

                @include mobile {
                    width: rem(40);
                    height: rem(40);
                    margin-right: rem(12);
                }
            }

            &Text {
                @include text;

                @include mobile {
                    font-size: rem(16);
                }
            }
        }

        &Caption {
            font-size: rem(10);
            line-height: 1.2;
            font-style: italic;
            margin-top: rem(53);

            @include mobile {
                margin-top: rem(12);
            }
        }

        &Images {
            position: absolute;
            right: rem(23);
            top: rem(36);
            width: rem(314);

            @include mobile {
                right: 0;
                top: 0;
                width: 100%;
                margin-top: rem(23);
                position: relative;
            }

            &Logo {
                width: rem(186);
                margin-left: auto;
                margin-right: auto;
            }

            .button {
                margin-top: rem(20);
                width: 100%;

                &:first-child {
                    margin-top: 0;
                }
            }
        }
    }
</style>
