<template>
    <canvas ref="canvas" :class="$style.canvas" />
</template>

<script>
export default {
    name: 'LightningCanvas',
    data: function () {
        return {
            ctx: null,
            w: 0,
            h: 0,
            lastTime: 0,
            currTime: 0,
            timeToCall: 500,
            id: 0,
            lightTimeCurrent: 0,
            lightTimeTotal: 50,
            lightning: []
        }
    },
    mounted () {
        const page = document.getElementById('page')

        this.w = page.offsetWidth
        this.h = page.offsetHeight
        this.ctx = this.$refs.canvas.getContext('2d')
        this.ctx.width = page.offsetWidth
        this.ctx.height = page.offsetHeight
        this.$refs.canvas.width = page.offsetWidth
        this.$refs.canvas.height = page.offsetHeight

        window.addEventListener('resize', this.resize)
        page.addEventListener('resize', this.resize)

        window.requestAnimationFrame(this.init)
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
            window.requestAnimationFrame(this.loop)
        },

        loop () {
            const loopIt = () => {
                this.currTime = new Date().getTime()
                this.timeToCall = Math.max(0, 16 - (this.currTime - this.lastTime))
                this.id = setTimeout(() => { loopIt() }, this.timeToCall)
                this.lastTime = this.currTime + this.timeToCall
                this.clearCanvas()
                this.updateL()
                this.lightningTimer()
                this.renderL()
            }
            window.requestAnimationFrame(loopIt)
        },

        clearCanvas () {
            this.ctx.globalCompositeOperation = 'destination-out'
            this.ctx.fillStyle = 'rgba(0,0,0,' + this.rand(1, 30) / 100 + ')'
            this.ctx.fillRect(0, 0, this.w, this.h)
            this.ctx.globalCompositeOperation = 'source-over'
        },

        lightningTimer () {
            this.lightTimeCurrent++
            if (this.lightTimeCurrent >= this.lightTimeTotal) {
                const newX = this.rand(100, this.w - 100)
                const newY = this.rand(0, this.h / 2)
                let createCount = this.rand(1, 3)
                while (createCount--) {
                    this.createL(newX, newY, true)
                }
                this.lightTimeCurrent = 0
                this.lightTimeTotal = this.rand(30, 100)
            }
        },

        renderL () {
            let i = this.lightning.length
            while (i--) {
                const light = this.lightning[i]

                this.ctx.strokeStyle = 'hsla(0, 100%, 100%, ' + this.rand(10, 100) / 100 + ')'
                this.ctx.lineWidth = 1
                if (this.rand(0, 30) === 0) {
                    this.ctx.lineWidth = 2
                }
                if (this.rand(0, 60) === 0) {
                    this.ctx.lineWidth = 3
                }
                if (this.rand(0, 90) === 0) {
                    this.ctx.lineWidth = 4
                }
                if (this.rand(0, 120) === 0) {
                    this.ctx.lineWidth = 5
                }
                if (this.rand(0, 150) === 0) {
                    this.ctx.lineWidth = 6
                }

                this.ctx.beginPath()

                const pathCount = light.path.length
                this.ctx.moveTo(light.x, light.y)
                for (let pc = 0; pc < pathCount; pc++) {
                    this.ctx.lineTo(light.path[pc].x, light.path[pc].y)

                    if (light.canSpawn) {
                        if (this.rand(0, 100) === 0) {
                            light.canSpawn = false
                            this.createL(light.path[pc].x, light.path[pc].y, false)
                        }
                    }
                }

                if (!light.hasFired) {
                    this.ctx.fillStyle = 'rgba(255, 255, 255, ' + this.rand(4, 12) / 100 + ')'
                    this.ctx.fillRect(0, 0, this.w, this.h)
                }

                if (this.rand(0, 30) === 0) {
                    this.ctx.fillStyle = 'rgba(255, 255, 255, ' + this.rand(1, 3) / 100 + ')'
                    this.ctx.fillRect(0, 0, this.w, this.h)
                }

                this.ctx.stroke()
            }
        },

        updateL () {
            let i = this.lightning.length
            while (i--) {
                const light = this.lightning[i]

                light.path.push({
                    x: light.path[light.path.length - 1].x + (this.rand(0, light.xRange) - (light.xRange / 2)),
                    y: light.path[light.path.length - 1].y + (this.rand(0, light.yRange))
                })

                if (light.path.length > light.pathLimit) {
                    this.lightning.splice(i, 1)
                }
                light.hasFired = true
            }
        },

        createL (x, y, canSpawn) {
            this.lightning.push({
                x,
                y,
                xRange: this.rand(5, 30),
                yRange: this.rand(5, 25),
                path: [{
                    x,
                    y
                }],
                pathLimit: this.rand(10, 35),
                canSpawn,
                hasFired: false
            })
        },

        rand (rMi, rMa) { return ~~((Math.random() * (rMa - rMi + 1)) + rMi) },
        hitTest (x1, y1, w1, h1, x2, y2, w2, h2) { return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1) }
    }
}
</script>

<style module lang="scss">
    .canvas {
        display: block;
    }
</style>
