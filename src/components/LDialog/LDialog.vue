<template>
  <div class="live-dialog-container" v-show="value">
    <transition name="fade-select">
      <div class="live-dialog" v-show="value" v-click-outside="close" :style="style">
        <div class="live-dialog-header">
          <div class="dialog-title">{{ title }}</div>
          <div class="dialog-close" @click="close">
            <i class="material-icons">close</i>
          </div>
        </div>
        <div class="live-dialog-content">
          <slot>

          </slot>
        </div>
        <div class="live-dialog-footer">
          <l-button type="primary" @click="close">确定</l-button>
        </div>
        <slot name="footer">

        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LDialog',
  props: {
    value: {},
    title: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: '400px',
    },
  },
  data() {
    return {}
  },
  computed: {
    style() {
      const styleObj = {}
      if (this.width) {
        styleObj.width = typeof this.width === 'string' ? this.width : `${this.width}px`
      }
      
      return styleObj
    },
  },
  mounted() {

  },
  methods: {
    close() {
      if (this.value) {
        this.$emit('input', false)
      }
    },
  },
}
</script>
