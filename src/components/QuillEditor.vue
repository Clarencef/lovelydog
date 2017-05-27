<template>
  <div ref="quillWrapper">
    <div class="html ql-editor">{{content}}</div>
  </div>
</template>

<script>
import Quill from 'quill';
require('quill/dist/quill.snow.css')
require('quill/dist/quill.bubble.css')
require('quill/dist/quill.core.css')
export default {
  name: 'QuillEditor',
  props: {
    options: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      content: 'jdkasljdklas',
      defaultModules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],
          ['link', 'image', 'video']
        ]
      },
    }
  },
  mounted() {
    this.options.theme = this.options.theme || 'snow'
    this.options.boundary = this.options.boundary || document.body
    this.options.modules = this.options.modules || this.defaultModules
    this.options.modules.toolbar = this.options.modules.toolbar !== undefined
      ? this.options.modules.toolbar
      : this.defaultModules.toolbar
    this.options.placeholder = this.options.placeholder || 'Insert text here ...'
    this.options.readOnly = this.options.readOnly !== undefined ? this.options.readOnly : false
    this.editor = new Quill(this.$refs.quillWrapper, this.options);
    console.log(this.editor);
  },
  beforeDestroy () {
    this.editor = null;
  }
}
</script>

<style lang="scss">

</style>
