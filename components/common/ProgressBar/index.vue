<template>
    <div :class="[$style.wrapper, $style[`progress-${progress}`], $style[way]]">
        <div :class="$style.bar">
            <div
                :class="[
                    $style.barItem,
                    {
                        [$style.active]: [2,3,4,5,6].includes(progress),
                        [$style.halfActive]: [1].includes(progress)
                    }
                ]"
            >
                <div :class="$style.barItemIcon">
                    <IconOzonic v-if="way === ways.branch1" :class="$style.barItemIconDefault" />
                    <IconOzonic v-if="way === ways.branch1" :class="$style.barItemIconProgress" />
                    <IconSmoglus v-if="way === ways.branch2" :class="$style.barItemIconDefault" />
                    <IconSmoglus v-if="way === ways.branch2" :class="$style.barItemIconProgress" />
                </div>
                <div :class="[$style.barItemTitle, 'onlyDesktop']">
                    {{ way === ways.branch1 ? 'Озоника' : 'Смогулус' }}
                </div>
            </div>
            <div :class="$style.barSeparator">
                <IconSeparator />
            </div>
            <div
                :class="[
                    $style.barItem,
                    {
                        [$style.active]: [4,5,6].includes(progress),
                        [$style.halfActive]: [3].includes(progress)
                    }
                ]"
            >
                <div :class="$style.barItemIcon">
                    <IconKontur v-if="way === ways.branch1" :class="$style.barItemIconDefault" />
                    <IconKontur v-if="way === ways.branch1" :class="$style.barItemIconProgress" />
                    <IconAllergenezium v-if="way === ways.branch2" :class="$style.barItemIconDefault" />
                    <IconAllergenezium v-if="way === ways.branch2" :class="$style.barItemIconProgress" />
                    <IconClosed :class="$style.barItemIconClosed" />
                </div>
                <div :class="[$style.barItemTitle, 'onlyDesktop']">
                    {{ way === ways.branch1 ? 'Котур' : 'Аллергенезиум' }}
                </div>
            </div>
            <div :class="$style.barSeparator">
                <IconSeparator />
            </div>
            <div
                :class="[
                    $style.barItem,
                    {
                        [$style.active]: [6].includes(progress) || [5,6].includes(progress) && way === ways.branch2,
                        [$style.halfActive]: [5].includes(progress)
                    }
                ]"
            >
                <div :class="$style.barItemIcon">
                    <IconTriggeron v-if="way === ways.branch1" :class="$style.barItemIconDefault" />
                    <IconTriggeron v-if="way === ways.branch1" :class="$style.barItemIconProgress" />
                    <IconVinterius v-if="way === ways.branch2" :class="$style.barItemIconDefault" />
                    <IconVinterius v-if="way === ways.branch2" :class="$style.barItemIconProgress" />
                    <IconClosed :class="$style.barItemIconClosed" />
                </div>
                <div :class="[$style.barItemTitle, 'onlyDesktop']">
                    {{ way === ways.branch1 ? 'Триггерон' : 'Винтериус' }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ways } from '~/utils/types'
import IconClosed from '~/assets/svg/icon-closed.svg'
import IconSeparator from '~/assets/svg/icon-separator.svg'
import IconOzonic from '~/assets/svg/icon-ozonic.svg'
import IconKontur from '~/assets/svg/icon-kontur.svg'
import IconTriggeron from '~/assets/svg/icon-triggeron.svg'
import IconSmoglus from '~/assets/svg/icon-smoglus.svg'
import IconAllergenezium from '~/assets/svg/icon-allergenezium.svg'
import IconVinterius from '~/assets/svg/icon-vinterius.svg'

export default {
    name: 'ProgressBar',
    components: {
        IconClosed,
        IconSeparator,
        IconOzonic,
        IconKontur,
        IconTriggeron,
        IconSmoglus,
        IconAllergenezium,
        IconVinterius
    },
    props: {
        way: {
            type: String,
            required: true
        },
        progress: {
            type: Number,
            default: 1 // [1,2,3,4,5,6]
        }
    },
    computed: {
        ways () {
            return ways
        }
    }
}
</script>

<style module lang="scss">
    .bar {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &Separator {
            width: rem(57);
            margin: 0 rem(12);

            @include mobile {
                width: rem(29);
                margin: 0 rem(6);
            }
        }

        &Item {
            position: relative;
            width: rem(49);
            height: rem(49);

            @include mobile {
                width: rem(25);
                height: rem(25);
            }

            &Icon {
                position: relative;
                width: 100%;
                height: 100%;

                svg {
                    width: 100%;
                    height: 100%;

                    @include absoluteCentredBlock();

                    stroke: $c-white;
                }

                &Default {
                    display: none;
                    opacity: 0.4;

                    .branch2 & {
                        stroke: none;
                        fill: $c-white;

                        circle {
                            stroke: $c-white;
                        }
                    }

                    .active &,
                    .halfActive & {
                        display: block;
                    }
                }

                &Progress {
                    display: none;

                    .branch2 & {
                        stroke: none;
                        fill: $c-white;

                        circle {
                            stroke: $c-white;
                        }
                    }

                    .active &,
                    .halfActive & {
                        display: block;
                    }

                    .halfActive:not(.active) & {
                        clip-path: inset(0 50% 0 0);
                    }
                }

                &Closed {
                    display: block;

                    .active &,
                    .halfActive & {
                        display: none;
                    }
                }
            }

            &Title {
                position: absolute;
                color: $c-white;
                font-size: rem(14);
                line-height: 1.2;
                bottom: rem(-7);
                left: 0;
                transform: translate(0, 100%);
            }
        }
    }
</style>
