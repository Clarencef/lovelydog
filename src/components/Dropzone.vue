<template>
  <form 
    action="/" 
    class="dropzone layout-grid__cell layout-grid__cell--span-11"
    id="my-awesome-dropzone"
    >
    <div id="dropzone-message">
      <span class="dropzone-title">Drop files here or click to select</span>
      <span class="dropzone-info">You can upload multiple files at once</span>
      <i class="fa fa-picture-o" aria-hidden="true"></i>
    </div>
  </form>
</template>

<script>
import Dropzone from 'dropzone';
console.log(Dropzone);
Dropzone.autoDiscover = false;

export default {
  name: 'dropzone',
  mounted () {
    const defaultSetting = {
      addRemoveLinks: true, 
    }
    console.log(this.$el);
    this.dropzone = new Dropzone(this.$el, defaultSetting);
    const vm = this;
  }
}
</script>

<style lang="scss">
@import '../assets/style/color.scss';
@import url('~dropzone/dist/dropzone.css');
.dropzone {
  border: 1px solid $primary-color;
  margin-top: 16px;
  padding-top: 40px;
  color: $primary-color;
  .dz-message {
    margin: 1em 0;
  }
  .fa-picture-o {
    margin-top: 0.5em;
    color: $primary-color;
    display: block;
    font-size: 48px;
  }
}
.dz-error-message {
  display: none!important;
}
</style>
