<template>
  <div class="live-tooltip-container">
    <div class="live-tooltip">
      {{ content }}
    </div>
    <slot></slot>
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
    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>
