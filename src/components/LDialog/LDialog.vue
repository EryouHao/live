<template>
  <div class="live-dialog-container" v-show="value">
    <transition name="fade-select">
      <div class="live-dialog" v-show="value" v-click-outside="outSideClose" :style="style">
        <div class="live-dialog-header">
          <div class="dialog-title">
            <span v-if="!$slots.title">{{ title }}</span>
            <slot name="title"></slot>
          </div>
          <div class="dialog-close" @click="close">
            <i class="material-icons">close</i>
          </div>
        </div>
        <div class="live-dialog-content">
          <slot></slot>
        </div>
        <div class="live-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
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
    maskDisabled: {
      type: Boolean,
      default: false,
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
    console.log(this.$slot)
  },
  methods: {
    close() {
      if (this.value) {
        this.$emit('input', false)
      }
    },
    outSideClose() {
      return this.maskDisabled ? null : this.close()
    },
  },
}
</script>
