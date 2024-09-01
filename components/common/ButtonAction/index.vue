<template>
    <component
        :is="download ? 'a' : 'button'"
        :href="href"
        :class="[$style.button, {[$style.isDisable]: isDisable}, $style[preset]]"
        role="button"
        :download="download"
        :target="target"
        @click="onClick"
    >
        <IconQuestion v-if="preset === 'white'" /><IconApp v-else-if="preset === 'app'" /><IconGoogle v-else-if="preset === 'google'" />{{ title }}
    </component>
</template>

<script>
import IconApp from '~/assets/svg/icon-app.svg'
import IconGoogle from '~/assets/svg/icon-google.svg'
import IconQuestion from '~/assets/svg/icon-question.svg'

export default {
    name: 'ButtonAction',
    components: {
        IconApp,
        IconGoogle,
        IconQuestion
    },
    props: {
        preset: {
            type: String,
            default: 'red' // ['red', 'app', 'google', 'white']
        },
        title: {
            type: String,
            required: true
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: null
        },
        download: {
            type: String,
            default: null
        },
        isDisable: {
            type: Boolean,
            default: false
        }
    },

    emits: ['handleClick'],

    methods: {
        onClick () {
            if (this.isDisable) {
                return
            }

            if (this.href) {
                const isBlank = ['blank', '_blank'].includes(this.target?.toLowerCase())

                if (isBlank || this.href.match(/http(s)*:\/\//)) {
                    window.open(this.href, isBlank ? '_blank' : '_self')
                } else {
                    this.$router.push(this.href)
                }
            }

            this.$emit('handleClick')
        }
    }
}
</script>

<style module lang="scss">
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: fit-content;
        padding: rem(11) rem(30);
        min-height: rem(53);
        border-radius: rem(40);
        background-color: $c-red;
        color: $c-white;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        transition: opacity 0.2s;

        @include text-big;

        font-weight: $fw-medium;

        @include desktop {
            &:hover {
                opacity: 0.8;
            }
        }

        &.white {
            background-color: $c-white;
            color: $c-black;
        }

        &.app {
            background-color: #4799E0;
        }

        &.google {
            background-color: #32872F;
        }

        &.isDisable {
            pointer-events: none;
            opacity: 0.4;
        }

        svg {
            width: rem(30);
            height: rem(30);
            margin-right: rem(10);
        }
    }
</style>
