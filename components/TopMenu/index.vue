<template>
    <header :class="$style.section">
        <div :class="$style.wrapper">
            <div :class="$style.logo">
                <div :class="$style.logoName">
                    Сим-Сим
                </div>
                <div :class="$style.logoCaption">
                    откройся!
                </div>
            </div>
            <div :class="$style.buttons">
                <div :class="$style.button" @click="isShow = !isShow">
                    <IconMenu />
                </div>
            </div>
        </div>
        <div
            :class="[
                $style.menu,
                {
                    [$style.active]: isShow
                }
            ]"
        >
            <div :class="$style.menuOverlay" @click="isShow = false" />
            <nav :class="$style.menuInner">
                <a href="https://astrazeneca.ru/confidentiality.html" target="_blank">
                    Политика конфиденциальности
                </a>
                <a href="https://az-most.ru/medication/Symbicortturbuhaler" target="_blank">
                    О препарате
                </a>
            </nav>
        </div>
    </header>
</template>

<script>
import IconMenu from '~/assets/svg/icon-menu.svg'

export default {
    name: 'TopMenu',
    components: {
        IconMenu
    },
    data: function () {
        return {
            isShow: false
        }
    }
}
</script>

<style module lang="scss">
    .section {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 100;

        @include mobile {
            background-color: rgba($c-white, 0.2);
        }
    }

    .wrapper {
        position: relative;
        padding-top: rem(12);
        padding-bottom: rem(12);
        display: flex;
        justify-content: space-between;
        z-index: 1;

        @include wrapper;

        @include mobile {
            padding-top: rem(6);
            padding-bottom: rem(6);
        }
     }

    .logo {
        margin-top: rem(6);
        color: $c-white;

        @include mobile {
            margin-top: 0;
        }

        &Name {
            font-size: rem(26);
            font-weight: $fw-black;

            @include mobile {
                font-size: rem(23);
            }
        }

        &Caption {
            font-size: rem(11);
            line-height: 0.9;
            font-weight: $fw-bold;
            margin-top: -1px;

            @include mobile {
                font-size: rem(9);
            }
        }
    }

    .buttons {
        display: flex;
    }

    .button {
        position: relative;
        width: rem(38);
        height: rem(38);
        border-radius: 100%;
        border: 1px solid $c-white;
        margin-left: rem(14);
        cursor: pointer;

        &:first-child {
            margin-left: 0;
        }

        svg {
            @include absoluteCentredBlock;
        }
    }

    .menu {
        position: fixed;
        height: 100vh;
        right: 0;
        top: 0;
        width: rem(234);
        background-color: rgba($c-black, 0.5);
        transform: translate(100%, 0);
        transition: transform 0.2s;

        @include mobile {
            width: 100%;
            top: rem(50);
            height: auto;
            transform: translate(0, calc(-100% - rem(50)));
        }

        &.active {
            transform: translate(0, 0);
        }

        &Overlay {
            position: fixed;
            height: 100vh;
            width: 100vw;
            right: 0;
            top: 0;
            z-index: 1;
            display: none;

            .active & {
                display: block;
            }
        }

        &Inner {
            position: relative;
            padding: rem(80) rem(23);
            z-index: 2;

            @include mobile {
                padding: rem(20) rem(12);
            }
        }

        a {
            margin-top: rem(20);
            display: block;
            color: $c-white;
            text-decoration: underline;
            transition: opacity 0.2s;

            @include text($fw-bold);

            @include mobile {
                text-align: center;
                margin-top: rem(10);
            }

            &:first-child {
                margin-top: 0;
            }

            &:hover {
                opacity: 0.8;
            }
        }
    }
</style>
