<template>
    <Teleport v-if="isShow" to="#modals">
        <div :class="$style.modal">
            <div :class="$style.modalOverload" />
            <div :class="[$style.modalContent, {[$style.isTitle]: title}]">
                <div v-if="title" :class="[$style.modalContentLeft, 'onlyDesktop']">
                    <div :class="$style.modalContentLeftTitle">
                        {{ title }}
                    </div>
                    <ButtonAction :class="$style.modalContentLeftButton" title="Продолжить" @handleClick="closeModal" />
                </div>
                <div :class="$style.modalContentRight">
                    <div :class="[$style.modalClose, 'onlyMobile']" @click="closeModal">
                        <IconClose />
                    </div>
                    <div v-if="title" :class="[$style.modalContentCaption, 'onlyDesktop']">
                        короткое видео от эксперта
                    </div>
                    <video controls crossorigin autoplay playsinline>
                        <source :src="src" type="video/mp4">
                    </video>
                    <ButtonAction v-if="!title" :class="[$style.modalContentRightButton, 'onlyDesktop']" title="Пропустить видео" @handleClick="closeModal" />
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport'
import modal from '~/mixins/modal'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconClose from '~/assets/svg/icon-close-circle.svg'

export default {
    name: 'ModalVideo',
    components: {
        ButtonAction,
        Teleport,
        IconClose
    },
    mixins: [modal],
    props: {
        title: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            required: true
        }
    }
}
</script>

<style module lang="scss">
    .modal {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        &Overload {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: rgba(#000, 0.8);
        }

        &Close {
            position: absolute;
            top: rem(16);
            right: rem(16);
            width: 40px;
            height: 40px;
            z-index: 1;

            svg {
                stroke: $c-white;
            }
        }

        &Content {
            position: relative;
            width: rem(1280);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include mobile {
                width: 100% !important;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-height: 100svh;
            }

            &.isTitle {
                width: rem(1183);
                top: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            @include mobile {
                width: 100% !important;
            }

            &Left {
                width: rem(238);

                &Title {
                    @include header-big;

                    color: $c-white;
                }

                &Button {
                    margin-top: rem(22);
                    margin-left: 0;
                }
            }

            &Right {
                width: 100%;
                position: relative;

                @include relativeHeight(1280, 720);

                @include mobile {
                    max-height: 100svh;
                    width: 100% !important;
                }

                .isTitle & {
                    width: rem(857);
                }

                &Button {
                    position: absolute;
                    bottom: rem(90);
                    left: rem(40);
                }

                video {
                    @include absoluteCoverImg();
                }
            }

            &Caption {
                position: absolute;
                top: rem(-10);
                left: 0;
                font-size: rem(18);
                line-height: 1.2;
                letter-spacing: -1%;
                font-style: italic;
                color: $c-white;
                transform: translate(0, -100%);
            }
        }
    }
</style>
