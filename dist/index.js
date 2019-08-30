(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.youtube = {}));
}(this, function (exports) { 'use strict';

    /** @param {HTMLElement} element */
    function Slides(element) {
        /** Get slide elements */
        const itemsContainer = element.getElementsByClassName('slides__items')[0];
        const items = element.getElementsByClassName('slides__item');

        /** Initialize default values for states */
        var /** {number} */ currentSlideIndex = 0;
        var /** {boolean} */ isAnimating = false;

        render();

        function next() {
            /** Check if item is already last */
            if (currentSlideIndex + 1 === items.length) {
                return;
            }

            /** Do nothing when still animating */
            if (isAnimating) {
                return;
            }

            currentSlideIndex = currentSlideIndex + 1;
            render();
        }

        function previous() {
            /** Check if item is first */
            if (currentSlideIndex === 0) {
                return;
            }

            /** Do nothing when still animating */
            if (isAnimating) {
                return;
            }

            currentSlideIndex = currentSlideIndex - 1;
            render();
        }

        /** Update UI based on our states */
        function render() {
            isAnimating = true;

            /** Show current slide  */
            items[currentSlideIndex].classList.add('is-slide-visible');

            /** Animate container scroll to current slide */
            const containerLeft = itemsContainer.style.left ? itemsContainer.style.left : '0px';
            const currentSlideLeft = items[currentSlideIndex].offsetLeft ? -(items[currentSlideIndex].offsetLeft) + 'px' : '0px';
            const animation = itemsContainer.animate([
                { left: containerLeft },
                { left: currentSlideLeft }
            ], { duration: 150 });

            animation.addEventListener('finish', function () {
                isAnimating = false;

                /** Need to set left manually after animation */
                itemsContainer.style.left = currentSlideLeft;

                /** Hide slides other than current */
                const otherSlides = itemsContainer.getElementsByClassName('is-slide-visible');
                for (var index = 0; index < otherSlides.length; index++) {
                    if (otherSlides[index] === items[currentSlideIndex]) {
                        continue;
                    }

                    otherSlides[index].classList.remove('is-slide-visible');
                }
            });

            /** Clean event binding */
            document.removeEventListener('finish', animation);
        }

        return {
            next: next,
            previous: previous
        }
    }

    exports.Slides = Slides;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
