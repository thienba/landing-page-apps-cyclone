import { MOBILE_SIZE, TABLET_SIZE } from "./constants";

export const updateSlidesPerView = (widthBrowser, slide) => {
    if (widthBrowser >= TABLET_SIZE) {
        slide.params.slidesPerView = 4;
        slide.update();
        return;
    }

    if (widthBrowser >= MOBILE_SIZE && widthBrowser < TABLET_SIZE) {
        slide.params.slidesPerView = 2;
        slide.update();
        return;
    }

    if(widthBrowser < MOBILE_SIZE){
        slide.params.slidesPerView = 1;
        slide.update();
        return;
    }
}

export const enableButton = (button) => {
    button.style.opacity = 1;
    button.style.pointerEvents = 'unset';
}

export const disableButton = (button) => {
    button.style.opacity = 0.5;
    button.style.pointerEvents = 'none';
}

export const changeButtonOnSlide = (slide, buttonPrev, buttonNext, slidePerView = false) => {
    switch (slide.activeIndex) {
        case 0:
            disableButton(buttonPrev);
            enableButton(buttonNext);
            break;
        case slide.slides.length - 1:
            enableButton(buttonPrev);
            disableButton(buttonNext);
            break;
        default:
            enableButton(buttonPrev);
            enableButton(buttonNext);
            break;
    }
}
