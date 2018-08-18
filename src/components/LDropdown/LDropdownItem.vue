<template>
  <div class="live-dropdown-item" :class="classes" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LDropdownItem',
  props: {
    disabled: Boolean,
  },
  data() {
    return {}
  },
  computed: {
    classes() {
      return [{
        'is-disabled': this.disabled,
      }]
    },
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return
      }
      this.$parent.$parent.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
