<template>
  <div class="live-radio-container" @click="handleChange">
    <div class="live-radio-icon" :class="{ 'is-check': isChecked }">
      <input
        class="live-radio-input"
        type="radio"
        v-bind="$attrs"
        :checked="isChecked"
        v-on="listeners"
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
  props: {
    value: {},
    lValue: {},
  },
  data() {
    return {
    }
  },
  computed: {
    listeners() {
      return {
        input: event => this.$emit('input', this.lValue),
      }
    },
    isChecked() {
      return this.lValue === this.value
    },
  },
  methods: {
    handleChange() {
      this.$emit('input', this.lValue)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
