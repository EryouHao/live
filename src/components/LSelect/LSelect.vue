<template>
  <div :class="classes" v-click-outside="hide">
    <input
      v-bind="$attrs"
      ref="input"
      v-model="text"
      type="text"
      class="live-select-input"
      readonly
      @focus="focusHandler"
    >
    <i class="fa fa-angle-down live-select-icon" :class="{ 'active': visible }"></i>
    <transition name="fade-select">
      <l-select-options
        v-if="visible"
        :options="options"
        @option-click="optionClick"
      ></l-select-options>
    </transition>
  </div>
</template>

<script>
import LSelectOptions from './LSelectOptions'

export default {
  name: 'LSelect',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    LSelectOptions,
  },
  data() {
    return {
      text: 'Item1',
      value: 0,
      visible: false,
    }
  },
  computed: {
    classes() {
      return [{
        'live-select-container': true,
        'is-focus': this.visible,
      }]
    },
  },
  mounted() {
    this.initText()
    console.log(this.$attrs)
  },
  methods: {
    optionClick(value) {
      const selectedItem = this.options.filter(o => o.value === value)[0]
      this.text = selectedItem.text
      this.value = selectedItem.value
      this.$emit('input', value)
      this.$emit('change', value)
      this.visible = false
    },
    hide() {
      this.visible = false
    },
    focusHandler() {
      this.visible = true
    },
    initText() {
      console.log('value::: ', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
