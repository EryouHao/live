<template>
  <div class="live-radio-container" @click="handleChange" :class="{ 'is-disabled': disabled }">
    <div class="live-radio-icon" :class="{ 'is-check': isChecked }">
      <input
        class="live-radio-input"
        type="radio"
        :checked="isChecked"
        :disabled="disabled"
        :readonly="readonly"
        @input="handleChange"
      >
    </div>
    <label class="live-radio-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'LRadio',
  model: {
    prop: 'checked',
  },
  props: {
    value: {},
    checked: {},
    disabled: Boolean,
    readonly: Boolean,
  },
  computed: {
    isChecked() {
      return this.checked === this.value
    },
  },
  methods: {
    handleChange() {
      if (!this.disabled && !this.readonly) {
        this.$emit('input', this.value)
        if (this.checked !== this.value) {
          this.$emit('change', this.value)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
