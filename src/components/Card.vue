<template>
  <div class="card">
    <div class="card-avatar">
      <img :src="getPic(cardInfo.avatar)" />
    </div>
    <img :src="getPic(cardInfo.img)" />
    <p class="card-description">{{cardInfo.description}}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["cardInfo"],
  methods: {
    getPic(path) {
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
