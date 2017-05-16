<template>
  <header class="header layout-grid">
    <div class="logo layout-grid__cell--align-middle">
      <img class="logo-img" src="../assets/images/bulldog.svg"/>
    </div>

    this is header block
  </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/color.scss';
@import '../assets/style/_global.scss';
header {
  --layout-grid-margin: 24px;
  position: relative;
  @extend .z-depth-1;
  z-index: 1;
  height: 48px;
  background: $white;
  color: $black;
}
.logo{
  @include box(36px);
}
.logo-img {
  max-width: 100%;
}
</style>
