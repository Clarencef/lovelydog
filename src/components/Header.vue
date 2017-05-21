<template>
  <header class="header layout-grid">
    <div class="logo layout-grid__cell--align-middle">
      <router-link to="/">
        <img class="logo-img" src="../assets/images/bulldog.svg"/>
      </router-link>
    </div>
    <nav class="site-menu header-top-left layout-grid__cell--align-middle">
      <ul>
        <li class="header-top-item">
          <router-link to="/about">About Us</router-link>
        </li>
        <li class="header-top-item">
          <router-link to="/blog">Blog</router-link>
        </li>
        <li class="header-top-item">
          <router-link to="/location">Location</router-link>
        </li>
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
  a {
    text-decoration: none;
    color: $black;
  }
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
