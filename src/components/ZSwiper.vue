<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>-->
  </swiper>
</template>

<script>
export default {
  name: "ZSwiper",
  components: {},
  methods: {},
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          autoplay: true,
          delay: 3000
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },

        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    setInterval(() => {
      if (this.swiperSlides.length < 10) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {}
};
</script>

<style scoped>
</style>