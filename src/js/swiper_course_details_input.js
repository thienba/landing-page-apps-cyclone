import Swiper, { Autoplay } from 'swiper';

import 'swiper/css';
import { changeButtonOnSlide, updateSlidesPerView } from './functions';

const buttonLecturesPrev = document.querySelector('.button-lectures-prev');
const buttonLecturesNext = document.querySelector('.button-lectures-next');


const swiperLecturers = new Swiper(".swiper-lecturers", {
    slidesPerView: 4,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    modules: [Autoplay]
});

let widthBrowser = window.innerWidth;
updateSlidesPerView(widthBrowser, swiperLecturers);

window.addEventListener('resize', () => {
    widthBrowser = window.innerWidth;
    updateSlidesPerView(widthBrowser, swiperLecturers);
});

buttonLecturesPrev.addEventListener('click', () => {
    swiperLecturers.slidePrev();
    changeButtonOnSlide(swiperLecturers, buttonLecturesPrev, buttonLecturesNext);
});

buttonLecturesNext.addEventListener('click', () => {
    swiperLecturers.slideNext();
    changeButtonOnSlide(swiperLecturers, buttonLecturesPrev, buttonLecturesNext);
});

swiperLecturers.on('slideChange', function () {
    changeButtonOnSlide(swiperLecturers, buttonLecturesPrev, buttonLecturesNext);
});