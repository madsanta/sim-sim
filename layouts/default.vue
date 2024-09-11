<template>
    <div>
        <div id="root" :class="$style.root">
            <TopMenu />
            <div :class="$style.page">
                <Nuxt />
            </div>
            <FooterAstra :class="$style[typeSection]" />
        </div>
        <div id="modals" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopMenu from '~/components/TopMenu/index.vue'
import FooterAstra from '~/components/FooterAstra/index.vue'
import { types } from '~/utils/types'

export default {
    name: 'Default',
    components: {
        TopMenu,
        FooterAstra
    },
    computed: {
        types () {
            return types
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
        height: 100vh;
        min-height: rem(800 - 116);
        background: linear-gradient(to right bottom, #492227, #073150);

        @include mobile {
            height: 100svh;
            min-height: rem(640);
        }
    }

    .helloIntro {
        @include mobile {
            display: none;
        }
    }
</style>
