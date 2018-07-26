<template>
  <div class="live-checkbox-container">
    <div class="live-checkbox-icon">
      <input type="checkbox">
    </div>
    <label class="live-checkbox-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'LCheckbox',
  model: {
    prop: 'checked',
  },
  props: {
    value: {},
    checked: {},
    disabled: Boolean,
    readonly: Boolean,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>
