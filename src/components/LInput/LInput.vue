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
        :type="type"
        :value="value"
        class="live-input"
        @input="bindValue($event.target.value)"
        :readonly="readonly"
      >
      <transition name="slide-left-fade">
        <div
          v-if="placeholder && !isFocus && !value"
          class="live-holder"
          @click="$refs.input.focus()"
        >{{ placeholder }}</div>
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
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      isFocus: false,
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
      this.$emit('input', value)
    },
  },
}
</script>
