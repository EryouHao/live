<template>
  <div class="live-row" :class="classes" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LRow',
  props: {
    justify: {
      type: String,
      default: 'initial',
    },
    align: {
      type: String,
      default: 'initial',
    },
    gutter: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  provide() {
    return { row: this }
  },
  computed: {
    classes() {
      return [{
      }]
    },
    style() {
      return {
        'justify-content': {
          'start': 'flex-start',
          'center': 'center',
          'end': 'flex-end',
          'space-around': 'space-around',
          'space-between': 'space-between',
        }[this.justify] || this.justify,
        'align-items': {
          'top': 'flex-start',
          'center': 'center',
          'bottom': 'flex-end',
        }[this.align] || this.align,
      }
    },
  },
}
</script>
