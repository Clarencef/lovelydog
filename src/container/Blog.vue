<template>
  <section class="blog-page-container layout-grid">
    <Dropzone />
    <Editor
      @selectedGender="handleGenderSelect"
      @selectedSize="handleSizeSelect"
      @selectedColor="handleColorSelect"
    />
  </section>
</template>

<script>
import Dropzone from '../components/Dropzone';
import Editor from '../components/Editor'
export default {
  name: 'Blog',
  data () {
    return {
      selectedGender: null,
      selectedSize: null,
      selectedColor: null,
    }
  },
  components: { 
    Dropzone,
    Editor
  },
  methods: {
    handleGenderSelect (data) {
      this.selectedGender = data;
    },
    handleSizeSelect (data) {
      this.selectedSize = data;
    },
    handleColorSelect (data) {
      this.selectedColor = data;
    },
  }
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
