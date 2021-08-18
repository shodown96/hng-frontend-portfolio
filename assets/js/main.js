(function () {
  "use strict"; // Start of use strict

  AOS.init();
  const splash = document.querySelector(".splash");
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      console.log("kjhvgk")
      splash.classList.add("hide")
    }, 5000);
  })

  let labels = ['Home', 'About', 'Projects'];
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (labels[index]) + '</span>';
      },
    },


  });
  let swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})(); // End of use strict

