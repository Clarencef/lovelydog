<template>
  <section class="blog-page-container layout-grid">
    <Dropzone />
    <Editor />
  </section>
</template>

<script>
import Dropzone from '../components/Dropzone';
import Editor from '../components/Editor'
export default {
  name: 'Blog',
  components: { 
    Dropzone,
    Editor
  },
}
</script>

<style lang="scss">
  .blog-page-container {
    justify-content: center;
    &.layout-grid {
      padding-top: 32px;
    }
  }
</style>
