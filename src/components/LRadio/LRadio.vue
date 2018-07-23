<template>
  <div class="live-radio-container">
    <div class="live-radio-icon">
      <input
        class="live-radio-input"
        type="radio"
        :checked="isChecked"
        @change="handleChange"
      >
    </div>
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'LRadio',
  props: {
    value: [String|Number|Boolean],
  },
  data() {
    return {
      isChecked: false,
    }
  },
  methods: {
    handleChange(event) {
      this.isChecked = event.target.checked
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
