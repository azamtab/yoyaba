import Swiper from "swiper";
import { menuInit } from "./menu";

if (!window.yoyaba) {
  window.yoyaba = {};
}
menuInit();

const firstSwiper = new Swiper(".firstSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.5": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.75": {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    "@2.25": {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const secondSwiper = new Swiper(".secondSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
