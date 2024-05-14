let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let sliderDom = document.querySelector('.slider');
let carouselDom = sliderDom.querySelector('.slider .list');
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.slider .time');

thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function() {
    showslider('next');
}
prevDom.onclick = function() {
    showslider('prev');
}
let runTimeout;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext)