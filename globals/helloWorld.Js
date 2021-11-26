import apiaudio from "apiaudio";
const helloWorld = async () => {

    console.log('start')
    apiaudio.reset()
    apiaudio.configure({ apiKey: 'd7f5a0f987db470bad65e70b7ef3f3ff' })

    try {
        const script = await apiaudio.Script.create({
            scriptText: `
   <<soundSegment::intro>>
   <<sectionName::intro>>
   Hello world. Welcome to API dot audio.
   <<soundSegment::main>>
   <<sectionName::main>>
   Create audio in a few easy steps. Use sound templates and effects. <break time = '1s'/>
   <<soundSegment::outro>>
   <<sectionName::outro>>
   We're excited to see what you build!
   `,
            scriptName: 'hello',
            projectName: 'hello',
            moduleName: 'hello'
        })
        console.log(script)

        const speech = await apiaudio.Speech.create({ scriptId: script['scriptId'], voice: 'Aria' })
        console.log(speech)

        const template = 'parisianmorning'
        const mastering = await apiaudio.Mastering.create({ scriptId: script['scriptId'], soundTemplate: template })
        console.log(mastering)
    } catch (e) {
        console.error(e)
    }
}

(function () {
    if (typeof window !== 'undefined') {
    // const win = window
    const doc = document.documentElement

    doc.classList.remove('no-js')
    doc.classList.add('js')

    // Reveal animations
    if (document.body.classList.contains('has-animations')) {
        /* global ScrollReveal */
        const sr = window.sr = ScrollReveal()

        sr.reveal('.feature, .pricing-table-inner', {
            duration: 600,
            distance: '20px',
            easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
            origin: 'bottom',
            interval: 100
        })

        doc.classList.add('anime-ready')
        /* global anime */
        anime.timeline({
            targets: '.hero-figure-box-05'
        }).add({
            duration: 400,
            easing: 'easeInOutExpo',
            scaleX: [0.05, 0.05],
            scaleY: [0, 1],
            perspective: '500px',
            delay: anime.random(0, 400)
        }).add({
            duration: 400,
            easing: 'easeInOutExpo',
            scaleX: 1
        }).add({
            duration: 800,
            rotateY: '-15deg',
            rotateX: '8deg',
            rotateZ: '-1deg'
        })

        anime.timeline({
            targets: '.hero-figure-box-06, .hero-figure-box-07'
        }).add({
            duration: 400,
            easing: 'easeInOutExpo',
            scaleX: [0.05, 0.05],
            scaleY: [0, 1],
            perspective: '500px',
            delay: anime.random(0, 400)
        }).add({
            duration: 400,
            easing: 'easeInOutExpo',
            scaleX: 1
        }).add({
            duration: 800,
            rotateZ: '20deg'
        })

        anime({
            targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
            duration: anime.random(600, 800),
            delay: anime.random(600, 800),
            rotate: [anime.random(-360, 360), function (el) {
                return el.getAttribute('data-rotation')
            }],
            scale: [0.7, 1],
            opacity: [0, 1],
            easing: 'easeInOutExpo'
        })
    }
}
}())

export default helloWorld;