<template>
  <div class="site-container layout-grid">
    <Carousel />
    <CardCarousel />
    <SiteArticle />
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
import CardCarousel from '../components/CardCarousel';
import SiteArticle from '../components/SiteArticle';
export default {
  name: 'main',
  components: {
    Carousel,
    CardCarousel,
    SiteArticle,
  },
}
</script>

<style lang="scss">
@import '../assets/style/color.scss';
.site-container.layout-grid {
  --layout-grid-margin: 8px;
  padding-bottom: 48px;
  background: linear-gradient(lighten($primary-color, 15), lighten($primary-color, 20), $container-bg);
  color: $white;
}

.card-swiper-wrapper {
  padding: 56px;
}

.main-info {
  padding-top: 24px;
  display: flex;
  justify-content: center;
  direction: row;
  margin: 0 auto;
  flex-wrap: wrap;
}
</style>
