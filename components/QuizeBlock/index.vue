<template>
    <section :class="$style.section">
        <QuizeIntro v-if="!isIntroShowed" :type="type" :current-type-way="currentTypeWay" />
        <QuizeMain
            v-else
            :type="type"
            :current-type-way="currentTypeWay"
            :index-question="indexQuestion"
            :questions-length="questionsLength"
            :question="question"
        />
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import QuizeIntro from './components/QuizeIntro/index.vue'
import QuizeMain from './components/QuizeMain/index.vue'

export default {
    name: 'QuizeBlock',
    components: {
        QuizeIntro,
        QuizeMain
    },
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters({
            isIntroShowed: 'isIntroShowed',
            currentTypeWay: 'currentTypeWay',
            indexQuestion: 'indexQuestion',
            questionsLength: 'questionsLength',
            question: 'question'
        })
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        height: 100%;
    }
</style>
