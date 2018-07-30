<template>
  <div class="live-tooltip-container">
    <transition name="fade-select">
      <div
        class="live-tooltip"
        :class="`is-${placement}`"
        :style="styles"
        v-if="show"
        @mouseover="show = true"
        @mouseout="show = false"
      >
        {{ content }}
      </div>
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
  },
  data() {
    return {
      styles: null,
      show: false,
    }
  },
  computed: {
  },
  mounted() {
    console.log(this.$refs.item)
    // this.setPosition(this.$refs.item, 'left')
  },
  methods: {
    setPosition(dom, position) {
      console.log(dom.getBoundingClientRect())
      const { width } = dom.getBoundingClientRect()
      this.styles = {
        transform: `translateX(-${width}px)`,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
