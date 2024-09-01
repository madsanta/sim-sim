export default function () {
    const html = document.getElementsByTagName('html')[0]
    const base = 100
    let fs = base
    let cf = 0

    const setResponsiveFontSize = () => {
        const currentWidth = document.body.offsetWidth

        // if (currentWidth >= 1440) {
        //     cf = currentWidth * 100 / 1440
        // } else if (currentWidth >= 1024) {
        if (currentWidth >= 1280) {
            cf = currentWidth * 100 / 1440
        } else if (currentWidth >= 640) {
            cf = currentWidth * 100 / 786
        } else {
            cf = currentWidth * 100 / 390
        }

        fs = (base * cf / 100)
        html.style.fontSize = fs + 'px'
    }

    setResponsiveFontSize()

    window.addEventListener('resize', setResponsiveFontSize)
};
