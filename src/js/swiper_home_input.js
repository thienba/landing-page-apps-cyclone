import Swiper, { Autoplay } from 'swiper';

import 'swiper/css';
import { changeButtonOnSlide, updateSlidesPerView } from './functions';
import { TABLET_SIZE } from './constants';

const buttonCoursePrev = document.querySelector('.button-course-prev');
const buttonCourseNext = document.querySelector('.button-course-next');
const buttonCEOPrev = document.querySelector('.button-ceo-prev');
const buttonCEONext = document.querySelector('.button-ceo-next');
const buttonEvaluationsPrev = document.querySelector('.button-evaluations-prev');
const buttonEvaluationsNext = document.querySelector('.button-evaluations-next');

let widthBrowser = window.innerWidth;
let swiperCourse = new Swiper('.swiper-course');

const setAutoPLayCourse = (widthBrowser) => {
    if (widthBrowser < TABLET_SIZE) {
        swiperCourse.destroy()
        swiperCourse = new Swiper('.swiper-course', {
            speed: 1500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            modules: [Autoplay]
        })
    } else {
        swiperCourse.destroy();
        swiperCourse = new Swiper('.swiper-course');
    }
}

setAutoPLayCourse(widthBrowser);
window.addEventListener('resize', () => {
    widthBrowser = window.innerWidth;
    setAutoPLayCourse(widthBrowser);
});

buttonCoursePrev.addEventListener('click', () => {
    swiperCourse.slidePrev();
    changeButtonOnSlide(swiperCourse, buttonCoursePrev, buttonCourseNext);
});

buttonCourseNext.addEventListener('click', () => {
    swiperCourse.slideNext();
    changeButtonOnSlide(swiperCourse, buttonCoursePrev, buttonCourseNext);
});

swiperCourse.on('slideChange', function () {
    changeButtonOnSlide(swiperCourse, buttonCoursePrev, buttonCourseNext);
});

const swiperCEO = new Swiper(".swiper-ceo", {
    slidesPerView: 4,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    modules: [Autoplay]
});


updateSlidesPerView(widthBrowser, swiperCEO);

window.addEventListener('resize', () => {
    widthBrowser = window.innerWidth;
    updateSlidesPerView(widthBrowser, swiperCEO);
});

buttonCEOPrev.addEventListener('click', () => {
    swiperCEO.slidePrev();
});

buttonCEONext.addEventListener('click', () => {
    swiperCEO.slideNext();
});

let swiperEvaluations = new Swiper(".swiper-evaluations");

const setAutoPLayEvaluations = (widthBrowser) => {
    if (widthBrowser < TABLET_SIZE) {
        swiperEvaluations.destroy()
        swiperEvaluations = new Swiper(".swiper-evaluations", {
            speed: 1500,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            modules: [Autoplay]
        })
    } else {
        swiperEvaluations.destroy();
        swiperEvaluations = new Swiper('.swiper-evaluations');
    }
}

setAutoPLayEvaluations(widthBrowser);
window.addEventListener('resize', () => {
    widthBrowser = window.innerWidth;
    setAutoPLayEvaluations(widthBrowser);
});

buttonEvaluationsPrev.addEventListener('click', () => {
    swiperEvaluations.slidePrev();
    changeButtonOnSlide(swiperEvaluations, buttonEvaluationsPrev, buttonEvaluationsNext);
});

buttonEvaluationsNext.addEventListener('click', () => {
    swiperEvaluations.slideNext();
    changeButtonOnSlide(swiperEvaluations, buttonEvaluationsPrev, buttonEvaluationsNext);
});

swiperEvaluations.on('slideChange', function () {
    changeButtonOnSlide(swiperEvaluations, buttonEvaluationsPrev, buttonEvaluationsNext);
});
