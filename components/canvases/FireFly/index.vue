<template>
    <canvas ref="canvas" :class="$style.canvas" />
</template>

<script>
export default {
    name: 'FireFly',
    data: function () {
        return {
            c2d: null,
            w: 0,
            h: 0,
            f: [],
            mouse: {
                x: 0,
                y: 0
            },
            lastMouse: {
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        fireFlies () {
            return [...this.f]
        }
    },
    mounted () {
        const page = document.getElementById('page')

        this.w = page.offsetWidth
        this.h = page.offsetHeight
        this.c2d = this.init()
        this.c2d.width = page.offsetWidth
        this.c2d.height = page.offsetHeight

        window.addEventListener('mousemove', this.mouseMove, false)
        window.addEventListener('resize', this.resize)
        page.addEventListener('resize', this.resize)

        window.requestAnimationFrame(this.loop)
        setInterval(() => {
            window.requestAnimationFrame(this.loop)
        }, 1000 / 60)
    },
    destroyed () {
        const page = document.getElementById('page')

        window.removeEventListener('mousemove', this.mouseMove)
        window.removeEventListener('resize', this.resize)
        page.removeEventListener('resize', this.resize)
    },
    methods: {
        mouseMove (e) {
            this.lastMouse.x = this.mouse.x
            this.lastMouse.y = this.mouse.y

            this.mouse.x = e.pageX - window.offsetLeft
            this.mouse.y = e.pageY - window.offsetTop
        },

        resize () {
            const page = document.getElementById('page')

            this.w = page.offsetWidth
            this.h = page.offsetHeight
            this.c2d.width = page.offsetWidth
            this.c2d.height = page.offsetHeight
            this.$refs.canvas.width = page.offsetWidth
            this.$refs.canvas.height = page.offsetHeight

            this.f = []

            window.requestAnimationFrame(this.loop)
        },

        fireFly () {
            const s = Math.random() * 2
            const item = {
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                s,
                ang: Math.random() * 2 * Math.PI,
                v: s * s / 4
            }

            const move = () => {
                item.x += item.v * Math.cos(item.ang)
                item.y += item.v * Math.sin(item.ang)
                item.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180
            }

            const show = () => {
                this.c2d.beginPath()
                this.c2d.arc(item.x, item.y, item.s, 0, 2 * Math.PI)
                this.c2d.fillStyle = '#fddba3'
                this.c2d.fill()
            }

            return {
                item,
                move,
                show
            }
        },

        init () {
            const page = document.getElementById('page')
            const c = this.$refs.canvas.getContext('2d')
            const w = (this.$refs.canvas.width = page.offsetWidth)
            const h = (this.$refs.canvas.height = page.offsetHeight)
            c.fillStyle = 'rgba(30,30,30,1)'
            c.fillRect(0, 0, w, h)

            return c
        },

        draw () {
            if (this.fireFlies.length < 100) {
                for (let j = 0; j < 10; j++) {
                    this.f.push(this.fireFly())
                }
            }
            for (let i = 0; i < this.fireFlies.length; i++) {
                this.fireFlies[i].move()
                this.fireFlies[i].show()
                if (this.fireFlies[i].item.x < 0 || this.fireFlies[i].item.x > this.w || this.fireFlies[i].item.y < 0 || this.fireFlies[i].item.y > this.h) {
                    this.f.splice(i, 1)
                }
            }
        },

        loop () {
            this.c2d.clearRect(0, 0, this.w, this.h)
            this.draw()
        }
    }
}
</script>

<style module lang="scss">
    .canvas {
        filter: blur(1px);
    }
</style>
