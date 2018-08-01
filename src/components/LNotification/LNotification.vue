<template>
  <transition name="slide-top-fade">
    <div
      ref="notification"
      class="live-notification-container"
      v-show="visible"
      @mouseover="clearTimer"
      @mouseout="setTimer"
    >
      <div class="live-notification-header">
        <div class="live-notification-title">
          {{ title }}
        </div>
        <div class="close" @click="close">
          <i class="material-icons close-icon">close</i>
        </div>
      </div>
      <div class="live-notification-body">
        <slot>
          {{ content }}
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      visible: false,
      message: '',
      autoClose: true,
      duration: 3000,
      timer: null,
      position: 'top-right',
      defaultIndex: 1000,
    }
  },
  mounted() {
    this.setTimer()
  },
  methods: {
    setTimer() {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    close() {
      this.visible = false
      this.clearTimer()
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>
