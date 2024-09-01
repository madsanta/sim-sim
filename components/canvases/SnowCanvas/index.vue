<template>
    <canvas ref="canvas" :class="$style.canvas" />
</template>

<script>
export default {
    name: 'SnowCanvas',
    data: function () {
        return {
            ctx: null,
            w: 0,
            h: 0,
            sf: [],
            count: 150
        }
    },
    computed: {
        snowflakes () {
            return [...this.sf]
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

            this.snowflakes.forEach(el => el.resized())

            window.requestAnimationFrame(this.loop)
        },
        init () {
            this.snow()
        },
        snow () {
            this.ctx = this.$refs.canvas.getContext('2d')

            const add = item => this.snowflakes.push(item)

            const update = () => this.snowflakes.forEach(el => el.update())

            const draw = () => {
                this.ctx.clearRect(0, 0, this.$refs.canvas.offsetWidth, this.$refs.canvas.offsetHeight)
                this.snowflakes.forEach(el => el.draw())
            }

            const loop = () => {
                draw()
                update()
                window.requestAnimationFrame(loop)
            }

            const init = () => {
                for (let i = 0; i < this.count; i++) {
                    add(this.snowItem())
                }
                loop()
            }

            init()

            return { add }
        },
        snowItem () {
            const defaultOptions = {
                color: 'white',
                radius: [0.5, 3.0],
                speed: [1, 3],
                wind: [-0.5, 3.0]
            }

            const randomBetween = (min, max) => {
                return (min - 0.5) + Math.random() * (max - min + 1)
            }

            const options = { ...defaultOptions }
            const { radius, speed, wind, color } = options
            const params = {
                color,
                x: randomBetween(0, this.$refs.canvas.offsetWidth),
                y: randomBetween(-this.$refs.canvas.offsetHeight, 0),
                radius: randomBetween(...radius),
                speed: randomBetween(...speed),
                wind: randomBetween(...wind),
                isResized: false
            }

            const updateData = () => {
                params.x = randomBetween(0, this.$refs.canvas.offsetWidth)
                params.y = randomBetween(-this.$refs.canvas.offsetHeight, 0)
            }

            const resized = () => {
                params.isResized = true
            }

            const draw = () => {
                this.ctx.beginPath()
                this.ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI)
                this.ctx.fillStyle = params.color
                this.ctx.fill()
                this.ctx.closePath()
            }

            const translate = () => {
                params.y += params.speed
                params.x += params.wind
            }

            const onDown = () => {
                if (params.y < this.$refs.canvas.offsetHeight) { return }

                if (params.isResized) {
                    updateData()
                    params.isResized = false
                } else {
                    params.y = 0
                    params.x = randomBetween(0, this.$refs.canvas.offsetWidth)
                }
            }

            const update = () => {
                translate()
                onDown()
            }

            return {
                update,
                resized,
                draw
            }
        }
    }
}
</script>

<style module lang="scss">
    .canvas {
        display: block;
    }
</style>
