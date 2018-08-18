<template>
  <div class="live-alert-container" :class="classes" :style="style" v-if="!closed">
    <div class="live-alert-icon-container" v-if="showIcon || icon">
      <i class="material-icons">{{ icon || iconName }}</i>
    </div>
    <div class="live-alert-content">
      <div class="live-alert-title" v-if="title">{{ title }}</div>
      <slot></slot>
    </div>
    <div v-if="$slots.close" @click="close">
      <slot name="close">
      </slot>
    </div>
    <div
      class="live-alert-close-container"
      v-if="!$slots.close && closable"
      @click="close"
    >
      <i class="material-icons">close</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LAlert',
  props: {
    type: {
      type: String,
      default: 'warning',
    },
    showIcon: Boolean,
    icon: String,
    closable: Boolean,
    title: String,
    color: String,
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
      }]
    },
    iconName() {
      return {
        'warning': 'warning',
        'success': 'check_circle',
        'info': 'info',
        'danger': 'flash_on',
        'primary': 'notifications_active',
      }[this.type]
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
  methods: {
    close() {
      this.closed = true
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
