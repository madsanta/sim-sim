<template>
    <canvas ref="canvas" :class="$style.canvas" />
</template>

<script>
export default {
    name: 'ParticlesCanvas',
    data: function () {
        return {
            ctx: null,
            w: 0,
            h: 0,
            p: [],
            numP: 30
        }
    },
    computed: {
        particles () {
            return [...this.p]
        }
    },
    mounted () {
        const page = document.getElementById('page')

        this.w = page.offsetWidth
        this.h = page.offsetHeight
        this.$refs.canvas.width = page.offsetWidth
        this.$refs.canvas.height = page.offsetHeight
        this.ctx = this.$refs.canvas.getContext('2d')
        this.ctx.width = page.offsetWidth
        this.ctx.height = page.offsetHeight
        this.init()

        window.addEventListener('resize', this.resize)
        page.addEventListener('resize', this.resize)
    },
    destroyed () {
        const page = document.getElementById('page')

        window.removeEventListener('resize', this.resize)
        page.removeEventListener('resize', this.resize)
    },
    methods: {
        resize () {
            const page = document.getElementById('page')

            this.w = page.offsetWidth
            this.h = page.offsetHeight
            this.ctx.width = page.offsetWidth
            this.ctx.height = page.offsetHeight
            this.$refs.canvas.width = page.offsetWidth
            this.$refs.canvas.height = page.offsetHeight

            window.requestAnimationFrame(this.loop)
        },
        init () {
            for (let i = 0; i < this.numP; i++) { this.particles.push(this.particle()) }
            this.loop()
        },
        particle () {
            let x = this.$refs.canvas.width * Math.random()
            let y = this.$refs.canvas.height * Math.random()
            const vx = -1
            let vy = Math.random()

            const draw = () => {
                this.ctx.beginPath()
                this.ctx.fillStyle = 'rgba(0,0,0,0.3)'
                this.ctx.arc(x, y, 3, 0, 2 * Math.PI)
                this.ctx.fill()
            }

            const update = () => {
                // set the starting x/y to have velociaty
                x += vx
                y += vy

                if (x < 0) {
                    x = this.$refs.canvas.width // resets back to begining
                }
                if (y < 0 || y > this.$refs.canvas.height) { // when it hits the top or bottom bounce
                    vy = -vy
                }
            }

            return {
                draw,
                update
            }
        },
        loop () {
            this.ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)

            for (let i = 0; i < this.numP; i++) {
                this.particles[i].update()
                this.particles[i].draw()
            }
            window.requestAnimationFrame(this.loop)
        }
    }
}
</script>

<style module lang="scss">
    .canvas {
        display: block;
    }
</style>
