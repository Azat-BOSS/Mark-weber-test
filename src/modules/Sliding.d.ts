class Sliding {
  constructor() {
    this.initImagesSwiper.controller.control = this.initTitleSwiper
    this.initTitleSwiper.controller.control = this.initImagesSwiper
  }
  get initImagesSwiper() {
      let videoSwiper = new Swiper(".video-swiper", {
        effect: "creative",
        speed: 600,
        autoplay: {
          delay: 5400,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    })
    return videoSwiper
  }

  get initTitleSwiper() {
    return new Swiper(".swiper-title", {
      effect: "fade",
      fadeEffect: {
        crossFade: true
      }
    })
  }
}

export default Sliding
