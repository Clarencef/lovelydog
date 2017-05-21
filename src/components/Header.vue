<template>
  <header class="header layout-grid">
    <div class="logo layout-grid__cell--align-middle">
      <img class="logo-img" src="../assets/images/bulldog.svg"/>
    </div>
    <nav class="site-menu header-top-left layout-grid__cell--align-middle">
      <ul>
        <li class="header-top-item">花蓮</li>
        <li class="header-top-item">台北</li>
        <li class="header-top-item">台東</li>
        <li class="header-top-item">高雄</li>
      </ul>
    </nav>
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
  z-index: 2;
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
.site-menu {
  li {
    list-style: none;
    display: inline-block;
    margin: 15px;
  }
}
</style>
