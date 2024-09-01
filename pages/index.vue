<template>
    <div id="page" :class="[$style.page, $style[typeSection]]">
        <div :class="[$style.bg, $style.helloIntro]">
            <img class="onlyDesktop" src="~/assets/img/bg-hello-intro.jpg">
            <img class="onlyMobile" src="~/assets/img/bg-hello-intro-mobile.jpg">
        </div>
        <div :class="$style.canvas">
            <FireFly v-if="[types.helloIntro, types.intro, types.chooseDoor, types.completed].includes(typeSection)" />
            <LightningCanvas v-if="types.ozonic === typeSection" />
            <ParticlesCanvas v-if="types.smoglus === typeSection" />
            <StarsCanvas v-if="[types.kontur, types.triggeron, types.allergenezium].includes(typeSection)" />
            <SnowCanvas v-if="types.vinterius === typeSection" />
        </div>
        <HelloIntro v-if="typeSection === types.helloIntro" />
        <IntroBlock v-if="typeSection === types.intro" />
        <ChooseDoor v-if="typeSection === types.chooseDoor" />
        <QuizeBlock v-if="questionsTypes.includes(typeSection)" :type="typeSection" />
        <CompletedBlock v-if="typeSection === types.completed" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { types } from '~/utils/types'
import FireFly from '~/components/canvases/FireFly/index.vue'
import LightningCanvas from '~/components/canvases/LightningCanvas/index.vue'
import HelloIntro from '~/components/HelloIntro/index.vue'
import IntroBlock from '~/components/IntroBlock/index.vue'
import ChooseDoor from '~/components/ChooseDoor/index.vue'
import QuizeBlock from '~/components/QuizeBlock/index.vue'
import CompletedBlock from '~/components/CompletedBlock/index.vue'
import ParticlesCanvas from '~/components/canvases/ParticlesCanvas/index.vue'
import StarsCanvas from '~/components/canvases/StarsCanvas/index.vue'
import SnowCanvas from '~/components/canvases/SnowCanvas/index.vue'

export default {
    name: 'IndexPage',
    components: {
        SnowCanvas,
        StarsCanvas,
        ParticlesCanvas,
        CompletedBlock,
        FireFly,
        LightningCanvas,
        HelloIntro,
        IntroBlock,
        ChooseDoor,
        QuizeBlock
    },
    computed: {
        types () {
            return types
        },
        questionsTypes () {
            return [types.ozonic, types.kontur, types.triggeron, types.smoglus, types.allergenezium, types.vinterius]
        },
        ...mapGetters({
            typeSection: 'typeSection'
        })
    }
}
</script>

<style module lang="scss">
    .page {
        position: relative;
        height: calc(100vh - rem(116));
        min-height: rem(800 - 116);
        background: linear-gradient(to right bottom, #492227, #073150);

        @include mobile {
            height: 100svh;
            min-height: rem(640);
        }

        .bg {
            @include absoluteBlock;

            display: none;
            z-index: $zi-bg;
            overflow: hidden;

            img {
                @include absoluteCoverImg();
            }
        }

        .canvas {
            @include absoluteBlock;

            z-index: $zi-canvas;
            pointer-events: none;
            overflow: hidden;
        }

        &.helloIntro {
            .bg.helloIntro {
                display: block;
            }
        }

        &.intro {
            .bg.intro {
                display: block;
            }
        }

        &.chooseDoor {
            .bg.chooseDoor {
                display: block;
            }
        }

        &.ozonic {
            .bg.ozonic {
                display: block;
            }
        }

        &.kontur {
            .bg.kontur {
                display: block;
            }
        }

        &.triggeron {
            .bg.triggeron {
                display: block;
            }
        }

        &.smoglus {
            .bg.smoglus {
                display: block;
            }
        }

        &.allergenezium {
            .bg.allergenezium {
                display: block;
            }
        }

        &.vinterius {
            .bg.vinterius {
                display: block;
            }
        }

        &.completed {
            .bg.completed {
                display: block;
            }
        }

    }
</style>
