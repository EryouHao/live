<template>
  <div class="live-tag-container" :class="classes" :style="style" v-if="!closed">
    <slot></slot>
    <span class="close" v-if="closable" @click="close">
      <i class="material-icons">clear</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LTag',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    color: {
      type: String,
    },
    closable: Boolean,
  },
  data() {
    return {
      closed: false,
    }
  },
  computed: {
    classes() {
      return [{
        [`is-${this.type}`]: !!this.type,
        'is-closable': this.closable,
      }]
    },
    style() {
      let s = {}
      if (this.color) {
        s = {
          color: '#fff',
          borderColor: this.color,
          background: this.color,
        }
      }
      return s
    },
  },
  mounted() {
    console.log(this.type)
  },
  methods: {
    close() {
      this.closed = true
      this.$emit('close')
    },
  },
}
</script>
