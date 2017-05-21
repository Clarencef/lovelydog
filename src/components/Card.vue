<template>
  <div class="card layout-grid__cell layout-grid__cell--span-3 layout-grid__cell--span-12-phone layout-grid__cell--span-4-tablet">
    <div class="card-avatar">
      <img :src="getPic(data.avatar)"/>
    </div>
    <img :src="getPic(data.img)"/>
    <p class="card-description">{{data.description}}</p>
  </div>
</template>

<script>
  export default {
    name: "card",
    props: ['data'],
    methods: {
      getPic (path) {
        var images = require.context('../assets/images', false, /\.jpg$/)
        return images('./' + path + '.jpg')
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/style/mixin.scss';
@import '../assets/style/color.scss';
@import '../assets/style/_global.scss';
  .card {
    --layout-grid-gutter: 32px;
    position: relative;
    display: flex;
    flex-direction: column;
    color: black;
    overflow: hidden;
    background: $white;
    border-radius: 3px;
    transition: 0.3s;
    &:hover {
      transform: translateY(-3px);
      @extend .z-depth-2;
    }
  }
  .card-avatar {
    position: absolute;
    top: 16px;
    right: 16px;
    @include box(48px);
    img {
      @include box(48px);
      border-radius: 50%;
      @extend .z-depth-1;
    }
  }
  img {
    max-width: 100%;
  }
  .card-description {
    padding: 16px;
    margin: 0;
    background: $white;
  }
</style>