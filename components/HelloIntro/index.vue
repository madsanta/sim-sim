<template>
    <section :class="[$style.section, {[$style.isStarted]: isStarted}]" @click="setStarted">
        <div :class="$style.wrapper">
            <div :class="$style.title">
                <span>С</span>им-<span>С</span>им
            </div>
            <div :class="$style.description">
                откройся!
            </div>
        </div>
        <div :class="$style.caption">
            <div :class="$style.captionText">
                Проект подготовлен при поддержке:
            </div>
            <img src="~/assets/img/logo-astra.png">
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { types } from '~/utils/types'

export default {
    name: 'HelloIntro',
    data: function () {
        return {
            isStarted: false,
            animationDuration: 2000,
            timeout: 3000
        }
    },
    mounted () {
        this.setTypeSection(types.helloIntro)
        window.addEventListener('scroll', this.setStarted)
        window.addEventListener('touchmove', this.setStarted)
        window.addEventListener('wheel', this.setStarted)
        window.addEventListener('keypress', this.setStarted)
    },
    destroyed () {
        window.removeEventListener('scroll', this.setStarted)
        window.removeEventListener('touchmove', this.setStarted)
        window.removeEventListener('wheel', this.setStarted)
        window.removeEventListener('keypress', this.setStarted)
    },
    methods: {
        setStarted () {
            if (this.isStarted) {
                return
            }

            this.isStarted = true

            setTimeout(() => {
                this.setTypeSection(types.intro)
            }, this.timeout + this.animationDuration)
        },
        ...mapMutations({
            setTypeSection: 'setTypeSection'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: $zi-content;
    }

    .wrapper {
        position: relative;
        color: $c-white;
    }

    .title {
        text-align: center;
        font-size: rem(203);
        font-weight: $fw-black;

        @include mobile {
            font-size: rem(70);
        }

        span {
            display: inline-block;
            transform: rotate(0);
            transition: transform 2s;

            .isStarted & {
                transform: rotate(90deg);
            }
        }
    }

    .description {
        text-align: center;
        margin-top: rem(-17);
        font-size: rem(82);
        line-height: 0.9;

        @include mobile {
            margin-top: rem(-14);
            font-size: rem(28);
        }
    }

    .caption {
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: rem(43);
        color: $c-white;

        @include mobile {
            display: flex;
        }

        &Text {
            text-align :center;
            font-size: rem(10);
            line-height: 1.2;
        }

        img {
            width: rem(66);
        }
    }
</style>
