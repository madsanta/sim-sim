<template>
    <Teleport v-if="isShow" to="#modals">
        <div :class="$style.wrapper">
            <div :class="$style.overlay" />
            <div :class="$style.popupWrapper">
                <div :class="$style.popup">
                    <div :class="$style.popupInner">
                        <div :class="$style.popupClose" @click="closeModal">
                            <IconClose />
                        </div>
                        <div v-if="title" :class="$style.popupTitle">
                            {{ title }}
                        </div>
                        <div v-if="description" :class="$style.popupDescription">
                            {{ description }}
                        </div>
                        <div :class="[$style.popupContent, {[$style.needScroll]: needScroll}]">
                            <component :is="currentSvg" v-if="needScroll" />
                            <component :is="currentSvg" v-else class="onlyDesktop" />
                            <component :is="currentSvgMobile" v-if="!needScroll" class="onlyMobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import Teleport from 'vue2-teleport'
import modal from '~/mixins/modal'
import IconClose from '~/assets/svg/icon-close-circle.svg'
import ContentOzonicHistory from '~/assets/quize/content-ozonic-history.svg'
import ContentOzonicHistoryMobile from '~/assets/quize/content-ozonic-history-mobile.svg'
import ContentKonturExamination from '~/assets/quize/content-kontur-examination.svg'
import ContentKonturExaminationMobile from '~/assets/quize/content-kontur-examination-mobile.svg'
import ContentKonturBlood from '~/assets/quize/content-kontur-blood.svg'
import ContentSmoglusHistory from '~/assets/quize/content-smoglus-history.svg'
import ContentSmoglusHistoryMobile from '~/assets/quize/content-smoglus-history-mobile.svg'
import ContentSmoglusResearch from '~/assets/quize/content-smoglus-research.svg'
import ContentSmoglusResearchMobile from '~/assets/quize/content-smoglus-research-mobile.svg'
import ContentAllergeneziumTip from '~/assets/quize/content-allergenezium-tip.svg'
import ContentAllergeneziumTipMobile from '~/assets/quize/content-allergenezium-tip-mobile.svg'

export default {
    name: 'TipPopup',
    components: {
        Teleport,
        IconClose,
        ContentOzonicHistory,
        ContentOzonicHistoryMobile,
        ContentKonturExamination,
        ContentKonturExaminationMobile,
        ContentKonturBlood,
        ContentSmoglusHistory,
        ContentSmoglusHistoryMobile,
        ContentSmoglusResearch,
        ContentSmoglusResearchMobile,
        ContentAllergeneziumTip,
        ContentAllergeneziumTipMobile
    },
    mixins: [modal],
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        chapter: {
            type: String,
            required: true
        },
        needScroll: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
    computed: {
        currentSvg () {
            const chapter = this.setFirstLetter(this.chapter)
            const content = this.setFirstLetter(this.content)

            return `Content${chapter}${content}`
        },
        currentSvgMobile () {
            const chapter = this.setFirstLetter(this.chapter)
            const content = this.setFirstLetter(this.content)

            return `Content${chapter}${content}Mobile`
        }
    },
    methods: {
        setFirstLetter (string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }
    }
}
</script>

<style module lang="scss">
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($c-black, 0.5);
    }

    .popup {
        background: $c-white;
        color: $c-black;
        padding: rem(30);
        max-height: calc(100vh - rem(200));
        overflow-y: auto;

        @include mobile {
            max-height: calc(100svh - rem(100));
            padding: rem(15) rem(12);
        }

        &Wrapper {
            @include wrapper;

            @include absoluteCentredBlock();

            @include mobile {
                top: rem(70);
                left: 0;
                right: 0;
                width: 100%;
                transform: none;
            }
        }

        &Close {
            position: absolute;
            top: 0;
            right: 0;
            width: rem(48);
            height: rem(48);
            z-index: 1;
            cursor: pointer;

            @include mobile {
                width: rem(40);
                height: rem(40);
            }

            svg {
                stroke: $c-black;
            }
        }

        &Inner {
            position: relative;
        }

        &Title {
            @include header-big;

            @include mobile {
                width: calc(100% - rem(40));
                font-size: rem(22);
            }
        }

        &Description {
            font-size: rem(28);
            line-height: 1.2;
            font-weight: $fw-bold;

            @include mobile {
                width: calc(100% - rem(40));
                font-size: rem(14);
                font-weight: $fw-regular;
            }
        }

        &Content {
            width: 100%;

            .popupTitle + &,
            .popupDescription + & {
                margin-top: rem(20);

                @include mobile {
                    margin-top: rem(15);
                }
            }

            &.needScroll {
                @include mobile {
                    overflow: auto;

                    svg {
                        width: rem(390 * 3);
                    }
                }
            }

            svg {
                width: 100%;
            }
        }
    }
</style>
