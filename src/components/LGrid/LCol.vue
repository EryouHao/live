<template>
  <div class="live-col" :class="classes" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LCol',
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  inject: ['row'],
  data() {
    return {}
  },
  computed: {
    classes() {
      return [{
        [`live-col-${this.span}`]: true,
        [`live-col-offset-${this.offset}`]: true,
      }]
    },
    style() {
      return {
        'padding': `0 ${this.row.gutter / 2}px`,
      }
    },
  },
}
</script>
