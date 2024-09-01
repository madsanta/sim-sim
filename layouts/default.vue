<template>
    <div>
        <div id="root" :class="$style.root">
            <TopMenu />
            <Nuxt />
            <FooterBlock :class="$style[typeSection]" />
        </div>
        <div id="modals" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopMenu from '~/components/TopMenu/index.vue'
import FooterBlock from '~/components/FooterBlock/index.vue'
import { types } from '~/utils/types'

export default {
    name: 'Default',
    components: {
        TopMenu,
        FooterBlock
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
    .helloIntro {
        @include mobile {
            display: none;
        }
    }
</style>
