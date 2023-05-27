<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="c in list" :key="c.id">
        <img :src="c.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
export default {
  name: "Carousel",
  props: ["list"],

  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            speed: 800,
            loop: true,

            autoplay: {
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped lang='less'>
.swiper-slide {
  transform: translate3d(0, 0, 0);
}
</style>