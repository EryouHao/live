<template>
  <div class="live-form-item-container">
    <label class="live-form-item-label" :style="style">{{ label }}</label>
    <div class="live-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LFormItem',
  inject: ['form'],
  props: {
    label: String,
    labelWidth: {
      type: [Number, String],
      default() {
        return this.form.labelWidth
      },
    },
  },
  computed: {
    style() {
      return {
        'width': typeof this.labelWidth === 'number' ? `${this.labelWidth}px` : this.labelWidth,
      }
    },
  },
  data() {
    return {}
  },
}
</script>
