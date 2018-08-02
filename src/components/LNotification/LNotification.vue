<template>
  <transition name="slide-top-fade">
    <div
      ref="notification"
      class="live-notification-container"
      :class="{ 'is-dark': theme === 'dark' }"
      v-show="visible"
      @mouseover="clearTimer"
      @mouseout="setTimer"
    >
      <div :class="classes">
        <i v-if="type" class="material-icons live-notification-icon">{{ type | filterTypeIcon }}</i>
      </div>
      <div class="live-nofication-content-container">
        <div class="live-notification-header">
          <div class="live-notification-title" v-if="title">
            {{ title }}
          </div>
          <div class="close" @click="close">
            <i class="material-icons close-icon">close</i>
          </div>
        </div>
        <div class="live-notification-body" :class="{ 'is-empty': content === '' }">
          <slot>
            {{ content }}
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LNotification',
  data() {
    return {
      visible: false,
      autoClose: true,
      duration: 3000,
      timer: null,
      position: 'top-right',
      defaultIndex: 1000,
      type: null,
      content: '',
      title: '',
      theme: 'white',
    }
  },
  computed: {
    classes() {
      return [{
        'live-notification-icon-container': true,
        'is-success': this.type === 'success',
        'is-error': this.type === 'error',
      }]
    },
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
  filters: {
    filterTypeIcon(type) {
      return {
        'success': 'check_circle_outline',
        'error': 'error_outline',
      }[type]
    },
  },
}
</script>
