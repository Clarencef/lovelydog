<template>
  <div id="app">
    <SiteHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader';
export default {
  name: 'app',
  components: {
    SiteHeader,
  }
}
</script>

<style lang="scss">
@import "~normalize.css/normalize.css";
@import './assets/style/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
