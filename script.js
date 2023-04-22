gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//animation

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.container',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero__title', { opacity: 0.8 }, {
        opacity: 0.2,
        scrollTrigger: {
            trigger: '.hero__title',
            start: 'center',

            scrub: true
        }
    })



    let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsLeft.forEach(item => {
        gsap.fromTo(item, { x: -100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-1000',
                end: '-200',

                scrub: true
            }
        }) 
    });

    let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsRight.forEach(item => {
        gsap.fromTo(item, { x: 100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-900',
                end: '-200',

                scrub: true
            }
        })
    });
}




//splitting of the main title

let text = document.querySelector('.hero__title');

text.innerHTML = text.innerText.split('').map(
    (char) =>
        `<span>${char}</span>`
).join('')