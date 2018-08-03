<template>
  <form :class="classes">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'LForm',
  props: {
    labelPosition: {
      type: String,
      default: 'top',
    },
    labelWidth: [Number, String],
  },
  provide() {
    return { form: this }
  },
  computed: {
    classes() {
      return [{
        'live-form-container': true,
        'is-top': this.labelPosition === 'top',
        'is-left': this.labelPosition === 'left',
        'is-right': this.labelPosition === 'right',
      }]
    },
  },
  mounted() {
    console.log('父组件', this.$props)
  },
  data() {
    return {}
  },
}
</script>
