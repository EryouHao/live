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
    order: {
      type: Number,
      default: 0,
    },
    xs: {
      type: Number,
    },
    sm: {
      type: Number,
    },
    md: {
      type: Number,
    },
    lg: {
      type: Number,
    },
    xl: {
      type: Number,
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
        [`live-col-xs-${this.xs}`]: typeof this.xs === 'number',
        [`live-col-sm-${this.sm}`]: typeof this.sm === 'number',
        [`live-col-md-${this.md}`]: typeof this.md === 'number',
        [`live-col-lg-${this.lg}`]: typeof this.lg === 'number',
        [`live-col-xl-${this.xl}`]: typeof this.xl === 'number',
      }]
    },
    style() {
      return {
        'padding': `0 ${this.row.gutter / 2}px`,
        'order': this.order,
      }
    },
  },
}
</script>
