<template>
  <div class="live-dropdown-container" @mouseover="visible = true" @mouseout="visible = false">
    <div class="live-dropdown-control">
      <slot></slot>
    </div>
    <transition name="fade-drop">
      <div class="live-dropdown-list" :class="classes" v-show="visible">
        <slot name="list"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LDropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom-left',
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    classes() {
      return [{
        [`is-${this.placement}`]: true,
      }]
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
