export default {
    props: {
        isShow: {
            type: Boolean,
            required: true
        }
    },
    data: function () {
        return {
            currentScroll: 0
        }
    },
    emits: ['handleClosed'],
    watch: {
        isShow (next) {
            if (next) {
                this.openModal()
            }
        }
    },
    methods: {
        openModal () {
            this.currentScroll = document.documentElement.scrollTop
            const root = document.getElementById('root')
            root.style.top = -this.currentScroll + 'px'
            root.classList.add('showModal')
        },
        closeModal () {
            document.getElementById('root').classList.remove('showModal')
            const root = document.getElementById('root')
            window.scroll({
                top: this.currentScroll
            })
            root.style.top = 0

            this.$emit('handleClosed')
        }
    }
}
