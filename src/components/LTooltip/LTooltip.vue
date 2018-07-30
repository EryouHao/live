<template>
  <div class="live-tooltip-container">
    <transition name="fade-select">
      <div
        :class="classes"
        :style="style"
        v-if="show"
        @mouseover="show = true"
        @mouseout="show = false"
      >{{ content }}</div>
    </transition>
    <div class="live-tooltip-item" ref="item" @mouseover="show = true" @mouseout="show = false">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LTooltip',
  props: {
    content: String,
    placement: {
      type: String,
      default: 'top',
    },
    dark: Boolean,
    maxWidth: [Number, String],
  },
  data() {
    return {
      styles: null,
      show: false,
    }
  },
  computed: {
    classes() {
      return [{
        'live-tooltip': true,
        'is-left': this.placement === 'left',
        'is-right': this.placement === 'right',
        'is-bottom': this.placement === 'bottom',
        'is-top': this.placement === 'top',
        'is-dark': this.dark,
      }]
    },
    style() {
      console.log(this.maxWidth)
      if (this.maxWidth) {
        return {
          'max-width': `${this.maxWidth}px`,
          'white-space': 'pre-wrap',
        }
      }
      return {}
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
