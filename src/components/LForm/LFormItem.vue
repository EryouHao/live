<template>
  <div class="live-form-item-container">
    <label class="live-form-item-label">{{ label }}</label>
    <div class="live-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LFormItem',
  props: {
    label: String,
  },
  data() {
    return {}
  },
}
</script>
