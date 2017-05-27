<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/images/dog1.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/images/dog2.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/images/dog3.jpg"/></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div> 
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          direction : 'horizontal',
          grabCursor : true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          observeParents:true,
          loop: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart(swiper){
          //   console.log(swiper)
          // },
        }
      }
    },
  }
</script>

<style lang="scss">
@import '../assets/style/color.scss';
  .swiper-container {
    img{
      max-width: 100%;
    }
  }
  .site-container .swiper-pagination-bullet-active {
    background: $white;
  }
</style>
