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


//scroll with buttons

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let homeBtn = document.querySelector('.home');
let homeBlock = document.querySelector('.hero__section');

homeBtn.addEventListener('click', () => {
    scrollTo(homeBlock);
})

let aboutBtn = document.querySelector('.about');
let aboutBlock = document.querySelector('.portfolio__gallery');

aboutBtn.addEventListener('click', () => {
    scrollTo(aboutBlock);
})

let projectsBtn = document.querySelector('.projects');
let projectsBlock = document.querySelector('.gallery__left');

projectsBtn.addEventListener('click', () => {
    scrollTo(projectsBlock);
})

let contactsBtn = document.querySelector('.contact');
let contactsBlock = document.querySelector('.contacts');

contactsBtn.addEventListener('click', () => {
    scrollTo(contactsBlock);
})







const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', e => {
    if (input.value === '') {
        alert('please fill the form')
        e.preventDefault(); // Остановить отправку формы при пустом input
    } else {
        e.preventDefault(); // Остановить отправку формы
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
            } else {

            }
        };
        xhr.send(formData);
    }
});



const sendBtn = document.querySelector('.form__btn');
const popupBtn = document.querySelector('.popup__btn');
const popup = document.querySelector('.form__popup');
const formContent = document.querySelector('.form__container');

sendBtn.addEventListener('click', () => {
    if (input.value !== '') {
        formContent.style.visibility = 'hidden';
        popup.style.visibility = 'visible';
    } else {
        return
    }
       
});

popupBtn.addEventListener('click', () => {
    formContent.style.visibility = 'visible';
    popup.style.visibility = 'hidden';
});

