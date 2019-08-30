/** Slider Example 1 */
function sliderExample1() {
    const container = document.getElementsByClassName('js-slides-example-1')[0];
    const slidesElement = container.getElementsByClassName('slides')[0];
    const slides = youtube.Slides(slidesElement);
    const previousBtn = container.getElementsByClassName('js-previous-btn')[0];
    const nextBtn = container.getElementsByClassName('js-next-btn')[0];

    previousBtn.onclick = function () {
        slides.previous();
    };

    nextBtn.onclick = function () {
        slides.next();
    }
}

/** Slider Example 2 */
function sliderExample2() {
    const container = document.getElementsByClassName('js-slides-example-2')[0];
    const slidesElement = container.getElementsByClassName('slides')[0];
    const slides = youtube.Slides(slidesElement);
    const previousBtn = container.getElementsByClassName('js-previous-btn')[0];
    const nextBtn = container.getElementsByClassName('js-next-btn')[0];

    previousBtn.onclick = function () {
        slides.previous();
    };

    nextBtn.onclick = function () {
        slides.next();
    }
}

sliderExample1();
sliderExample2();