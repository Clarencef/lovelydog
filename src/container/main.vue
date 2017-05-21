<template>
  <div class="site-container layout-grid">
    <Carousel />
    <section class="main-info layout-grid__cell--span-12">
      <Card v-for="item in cardInfo" :key="item.id" :data="item"/>
    </section>
    <SiteArticle />
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import SiteArticle from '../components/SiteArticle';
export default {
  name: 'main',
  components: {
    Carousel,
    Card,
    SiteArticle,
  },
  data () {
    return {
      cardInfo: [{
        id: 1,
        avatar: 'avatar',
        title: 'Title1',
        subTitle: 'subTitle1',
        img: 'dog4',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      },{
        id: 2,
        avatar: 'avatar',
        title: 'Title2',
        subTitle: 'subTitle2',
        img: 'dog5',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      },{
        id: 3,
        avatar: 'avatar',
        title: 'Title3',
        subTitle: 'subTitle3',
        img: 'dog6',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      },{
        id: 4,
        avatar: 'avatar',
        title: 'Title4',
        subTitle: 'subTitle4',
        img: 'dog6',
        description: 'When the Wicked Witch looked out again and saw all her crows lying in a heap, she got into a terrible rage, and blew three times upon her silver whistle.',
      }]
    }
  },
}
</script>

<style lang="scss">
@import '../assets/style/color.scss';
  .site-container.layout-grid {
    --layout-grid-margin: 8px;
    padding-bottom:48px;
    background: linear-gradient(lighten($primary-color,15),lighten($primary-color,20),$container-bg);
    color: $white;
  }
  .main-info {
    padding-top:24px;
    display: flex;
    justify-content: center;
    direction: row;
    margin: 0 auto;
    flex-wrap: wrap;
  }
</style>
