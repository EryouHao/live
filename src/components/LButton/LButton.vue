<template>
  <button :class="classes" @click="click">
    <i v-if="icon" :class="{ 'material-icons': icon, 'live-icon-btn': $slots.default, 'live-icon-circle-btn': !$slots.default }">{{ icon }}</i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    icon: String,
    type: {
      type: String,
      default: 'default',
    },
    size: [String, Number],
    shape: String,
  },
  data() {
    return {
    }
  },
  computed: {
    classes() {
      return [{
          'live-btn': true,
          [`live-btn-${this.type}`]: !!this.type,
          [`live-btn-${this.size}`]: !!this.size,
          [`live-btn-${this.shape}`]: !!this.shape,
      }]
    },
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
