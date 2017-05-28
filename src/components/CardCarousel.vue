<template>
  <swiper class="card-swiper-wrapper layout-grid__cell--span-10" :options="cardSwiperOption" ref="cardSwiper">
    <swiper-slide v-for="item in cardInfo" :key="item.id" :data="item">
      <Card :cardInfo="item" />
    </swiper-slide>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import Card from './Card';
export default {
  name: "cardCarousel",
  components: {
    swiper,
    swiperSlide,
    Card,
  },
  props: ['data'],
  data() {
    return {
      cardInfo: [{
        id: 1,
        avatar: 'avatar',
        title: 'Title1',
        subTitle: 'subTitle1',
        img: 'dog4',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }, {
        id: 2,
        avatar: 'avatar',
        title: 'Title2',
        subTitle: 'subTitle2',
        img: 'dog5',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }, {
        id: 3,
        avatar: 'avatar',
        title: 'Title3',
        subTitle: 'subTitle3',
        img: 'dog6',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }, {
        id: 4,
        avatar: 'avatar',
        title: 'Title4',
        subTitle: 'subTitle4',
        img: 'dog4',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }, {
        id: 5,
        avatar: 'avatar',
        title: 'Title5',
        subTitle: 'subTitle5',
        img: 'dog5',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }, {
        id: 6,
        avatar: 'avatar',
        title: 'Title6',
        subTitle: 'subTitle6',
        img: 'dog6',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }],
      cardSwiperOption: {
        notNextTick: true,
        direction: 'horizontal',
        grabCursor: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        observeParents: true,
        autoplay: 0,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 56,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        // onTransitionStart(swiper){
        //   console.log(swiper)
        // },
      }
    }
  }
}
</script>

<style lang="scss">

</style>