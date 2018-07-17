<template>
  <button ref="button" :class="classes" @click="$emit('click', $event)">
    <transition name="slide-top-fade">
      <span class="icon-loading" v-if="loading">
        <i class="fa fa-spinner fa-pulse fa-fw"></i>
      </span>
    </transition>
    <span class="text">
      <i v-if="icon" :class="{ [`fa fa-${icon}`]: icon, 'live-icon-btn': $slots.default, 'live-icon-circle-btn': !$slots.default }"></i>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    icon: String,
    type: {
      type: String,
      default: 'default',
    },
    size: [String, Number],
    shape: String,
    loading: Boolean,
    long: Boolean,
  },
  computed: {
    classes() {
      return [{
        'live-btn': true,
        [`live-btn-${this.type}`]: !!this.type,
        [`live-btn-${this.size}`]: !!this.size,
        [`live-btn-${this.shape}`]: !!this.shape,
        'live-btn-long': !!this.long,
        'live-btn-loading': !!this.loading,
      }]
    },
  },
}
</script>
