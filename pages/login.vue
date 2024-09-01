<template>
    <div id="page" :class="$style.page">
        <div :class="[$style.bg, $style.helloIntro]">
            <img class="onlyDesktop" src="~/assets/img/bg-hello-intro.jpg">
            <img class="onlyMobile" src="~/assets/img/bg-hello-intro-mobile.jpg">
        </div>
        <div :class="$style.canvas">
            <FireFly />
        </div>
        <HelloIntro />
        <div :class="$style.popupWrapper">
            <div :class="$style.popup">
                <ButtonAction title="Войти" :href="`https://sso.az-most.ru/signin?source=${source}&next_url=${next}`" />
            </div>
            <div :class="$style.popupOverflow" />
        </div>
    </div>
</template>

<script>
import FireFly from '~/components/canvases/FireFly/index.vue'
import HelloIntro from '~/components/HelloIntro/index.vue'
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'IndexPage',
    components: {
        ButtonAction,
        FireFly,
        HelloIntro
    },
    data: function () {
        return {
            source: '',
            next: ''
        }
    },
    mounted () {
        this.source = window.location.href
        this.next = window.location.origin
    }
}
</script>

<style module lang="scss">
    .page {
        position: relative;
        height: calc(100vh - rem(116));
        background: linear-gradient(to right bottom, #492227, #073150);
        overflow: hidden;

        @include mobile {
            height: 100svh;
        }

        .bg {
            @include absoluteBlock;

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
    }

    .popupWrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1000;
    }

    .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        transform: translate(-50%, -50%);

        &Overflow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 2;
            background: rgba(#000, 0.65);

            @include mobile {
                height: 100svh;
            }
        }
    }
</style>
