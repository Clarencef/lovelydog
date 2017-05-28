<template>
  <div class="editor-form-wrapper layout-grid__cell layout-grid__cell--span-11">
    <form class="editor-form">
      <div class="select-wrapper">
        <span class="select-label">Gender</span>
        <span class="caret"></span>
        <select v-on:change="handleGenderSelect" class="select">
          <option>Man</option>
          <option>Female</option>
        </select>
      </div>
      <div class="select-wrapper">
        <span class="select-label">Size</span>
        <span class="caret"></span>
        <select v-on:change="handleSizeSelect" class="select">
          <option>大型犬</option>
          <option>中型犬</option>
          <option>小型犬</option>
        </select>
      </div>
      <div class="select-wrapper">
        <span class="select-label">Color</span>
        <span class="caret"></span>
        <select v-on:change="handleColorSelect" class="select">
          <option>黑色</option>
          <option>花色偏淺色</option>
          <option>花色偏深色</option>
          <option>土黃色</option>
          <option>白色</option>
        </select>
      </div>
      <QuillEditor/>
    </form>
  </div>
</template>

<script>
import QuillEditor from './QuillEditor'
export default {
  name: 'editor',
  components: {
    QuillEditor,
  },
  methods: {
    handleGenderSelect(e) {
      this.$emit('selectedGender', e.target.value);
    },
    handleSizeSelect(e) {
      this.$emit('selectedSize', e.target.value);
    },
    handleColorSelect(e) {
      this.$emit('selectedColor', e.target.value);
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/color.scss';

.editor-form-wrapper {
  padding-top: 18px;
}

.editor-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-label {
  margin: 0 16px;
}

.select {
  width: 180px;
  background: $white;
  padding: 8px;
  appearance: none;
  border-radius: 0;
}

.caret {
  position: absolute;
  margin-top: 4px; // top: 0;
  right: 16px;
  border: 8px solid transparent;
  border-top: 8px solid black;
}

.ql-container,
.ql-toolbar {
  width: 100%;
}

.ql-toolbar {
  margin-top: 32px;
}
</style>
