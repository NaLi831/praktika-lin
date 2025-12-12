import Swiper from 'swiper';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay]);

const mySlider = document.querySelector('.mySlider');

if (mySlider) {
  new Swiper(mySlider, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    // breakpoints: {
    //   576: { slidesPerView: 1, spaceBetween: 5 },   // mobile (≤576px)
    //   768: { slidesPerView: 2, spaceBetween: 10 },  // tablet (≤768px)
    //   1024: { slidesPerView: 3, spaceBetween: 20 }  // desktop (≥1024px)
    // }
  });
}



const mySliderPopular = document.querySelector('.mySliderPopular');

if (mySliderPopular) {
  new Swiper(mySliderPopular, {
    slidesPreView: 1,
    spaceBetween: 20,
    loop: true,
  })
}

const mySliderImpretion = document.querySelector('.mySliderImpretion');

if (mySliderImpretion) {
  new Swiper(mySliderImpretion, {
    slidesPreView: 2,
    spaceBetween: 20,
    loop: true,
  })
}
