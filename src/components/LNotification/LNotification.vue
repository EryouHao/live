<template>
  <div class="live-notification-container">
    <div class="live-notification-header">
      <div class="live-notification-title">
        {{ title }}
      </div>
      <div class="close">
        <i class="material-icons">close</i>
      </div>
    </div>
    <div class="live-notification-body">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
    }
  },
  methods: {
    setTimer() {
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close() {
      this.visible = false
      setTimeout(() => {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }, 5000)
    },
  },
  mounted() {
    this.setTimer()
  },
}
</script>
