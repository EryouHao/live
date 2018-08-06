<template>
  <transition name="fade-select">
    <div class="live-dialog-container" v-show="value">
      <div class="live-dialog" v-click-outside="close">
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
    </div>
  </transition>
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
    width: [Number, String],
  },
  data() {
    return {}
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
