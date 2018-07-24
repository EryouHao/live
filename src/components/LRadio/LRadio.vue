<template>
  <div class="live-radio-container">
    <div class="live-radio-icon" :class="{ 'is-check': isChecked }">
      <input
        class="live-radio-input"
        type="radio"
        v-bind="$attrs"
        :checked="isChecked"
        v-on="listeners"
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
        input: event => this.$emit('input', this.lValue)
      }
    },
    isChecked() {
      return this.lValue === this.value
    },
  },
  mounted() {
    console.log('value', this.value)
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>

</style>
