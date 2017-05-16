<template>
  <div class="site-container layout-grid">
    <Carousel />
    <section class="main-info layout-grid__cell--span-12">
      
    </section>
  </div>
</template>

<script>
import Carousel from '../components/Carousel';
export default {
  name: 'main',
  components: {
    Carousel
  },
}
</script>

<style lang="scss">
@import '../assets/style/color.scss';
  .site-container.layout-grid {
    padding-top:48px;
    padding-bottom:48px;
    background: linear-gradient($container-bg,$primary-color);
    color: $white;
  }
  .main-info {
    margin: 0 auto;
    height:108px;
    background: $white;
  }
</style>
