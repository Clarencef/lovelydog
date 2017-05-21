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
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          centeredSlides : true,
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
          // more Swiper configs and callbacks...
          // ...
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
