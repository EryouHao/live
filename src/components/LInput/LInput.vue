<template>
  <div class="live-input-container" :class="classes">
    <div :class="prefixClasses">
      <slot name="prefix"></slot>
    </div>
    <div class="live-input-wrapper">
      <input
        ref="input"
        @focus="isFocus = true"
        @blur="isFocus =false"
        type="text"
        :value="value"
        class="live-input"
        @input="bindValue($event.target.value)"
      >
      <transition name="slide-left-fade">
        <div v-if="placeholder && !isFocus && !value" class="live-holder" @click="$refs.input.focus()">{{ placeholder }}</div>
      </transition>
    </div>
    <div :class="suffixClasses">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LInput',
  props: {
    placeholder: String,
    size: String,
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isFocus: false,
      value: null,
    }
  },
  computed: {
    classes() {
      return [{
        'is-focus': this.isFocus,
        [`is-${this.size}`]: !!this.size,
      }]
    },
    prefixClasses() {
      return [{
        'prefix': !!this.$slots.prefix,
      }]
    },
    suffixClasses() {
      return [{
        'suffix': !!this.$slots.suffix,
      }]
    },
  },
  methods: {
    bindValue(value) {
      this.value = value
      this.$emit('input', value)
    },
  },
}
</script>
