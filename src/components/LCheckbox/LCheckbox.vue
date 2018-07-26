<template>
  <div class="live-checkbox-container" @click="handleChange">
    <div class="live-checkbox-icon" :class="{ 'is-check': isChecked }">
      <input type="checkbox" class="live-checkbox-input">
      <i class="material-icons live-icon">check</i>
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
    value: {
      type: [Array, String, Number, Object, Boolean],
      default: true,
    },
    checked: {},
    disabled: Boolean,
    readonly: Boolean,
  },
  data() {
    return {}
  },
  computed: {
    isChecked() {
      const { checked, value } = this
      return Array.isArray(checked) ? checked.includes(value) : checked === value
    },
  },
  mounted() {
    console.log(this.checked, this.value, this.checked)
  },
  methods: {
    handleChange() {
      if (!this.disabled && !this.readonly) {
        if (Array.isArray(this.checked)) {
          this.handleArray()
        } else {
          this.handleValue()
        }
      }
    },
    handleArray() {
      const { checked } = this
      if (checked.includes(this.value)) {
        checked.splice(checked.indexOf(this.value), 1)
      } else {
        checked.push(this.value)
      }
      this.$emit('input', checked)
      this.$emit('change', checked)
    },
    handleValue() {
      const newValue = this.checked === this.value ? null : this.value
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
