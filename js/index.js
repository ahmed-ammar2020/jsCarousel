"use strict";
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const carousel = document.querySelector(".carousel");
const carouselContainer = document.querySelector(".carousel-container");
const lis = document.querySelectorAll("li");

leftArrow.addEventListener("click", function () {
  let carouselStyles = getComputedStyle(carousel);
  if (parseInt(carouselStyles.right) <= 0) {
    carousel.style.right = "0px";
    return;
  }
  carousel.style.right = parseInt(carouselStyles.right) - 130 + "px";
});

rightArrow.addEventListener("click", function () {
  let carouselStyles = getComputedStyle(carousel);
  if (parseInt(carouselStyles.right) >= (lis.length - 3) * 130) {
    carousel.style.right = (lis.length - 3) * 130 + "px";
    return;
  }

  carousel.style.right = parseInt(carouselStyles.right) + 130 + "px";
});
