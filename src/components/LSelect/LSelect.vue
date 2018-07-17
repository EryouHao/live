<template>
  <div :class="classes" v-click-outside="hide">
    <input
      ref="input"
      v-model="text"
      type="text"
      class="live-select-input"
      :readonly="!filterable"
      @input="filterOptions($event.target.value)"
      @focus="focusHandler"
      @keydown.down.prevent="navigateOption('next')"
      @keydown.up.prevent="navigateOption('prev')"
      @keydown.enter.prevent="optionClick()"
      @keydown.esc.prevent="escHandler()"
    >
    <i class="fa fa-angle-down live-select-icon" :class="{ 'active': visible }"></i>
    <transition name="fade-select">
      <l-select-options
        v-if="visible"
        :options="filterable ? filteredOptions : options"
        v-model="value"
        :value="text"
        :active-index="activeIndex"
        :hover-index="hoverIndex"
        @option-click="optionClick"
      ></l-select-options>
    </transition>
  </div>
</template>

<script>
import LSelectOptions from './LSelectOptions.vue'

export default {
  name: 'LSelect',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {},
    filterable: Boolean,
  },
  components: {
    LSelectOptions,
  },
  data() {
    return {
      text: '',
      visible: false,
      activeIndex: -1,
      hoverIndex: -1,
      filteredOptions: [],
      selectedValue: null,
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
    if (this.filterable) {
      this.filteredOptions = this.options
    }
  },
  methods: {
    initText() {
      let activeIndex = -1
      this.options.forEach((item, index) => {
        if (item.value === this.value) {
          activeIndex = index
        }
      })
      this.activeIndex = activeIndex
      this.hoverIndex = activeIndex
      this.text = activeIndex > -1 ? this.options[activeIndex].text : ''
      console.log(this.activeIndex, this.hoverIndex)
    },
    optionClick(value) {
      if (!value) {
        value = this.selectedValue
      }
      if (!value) {
        return
      }
      const options = this.filteredOptions.length > 0 ? this.filteredOptions : this.options
      const selectedItem = options.filter(item => item.value === value)[0]
      this.activeIndex = options.indexOf(selectedItem)
      this.hoverIndex = this.activeIndex
      this.text = selectedItem.text
      this.$emit('input', value)
      this.$emit('change', value)
      this.visible = false
      this.$refs.input.blur()
    },
    hide() {
      this.visible = false
    },
    focusHandler(event) {
      this.visible = true
      this.$emit('focus', event)
      if (this.filterable) {
        this.$refs.input.select()
      }
    },
    escHandler(event) {
      this.$refs.input.blur()
      this.visible = false
    },
    filterOptions(text) {
      if (text) {
        this.filteredOptions = this.options.filter(item => item.text.toLowerCase().includes(text.toLowerCase()))
      } else {
        this.activeIndex = -1
        this.text = ''
        this.filteredOptions = this.options
      }
      console.log(this.value, this.text)
    },
    navigateOption(orientation) {
      if (this.options.length === 0) return
      const options = this.filteredOptions.length > 0 ? this.filteredOptions : this.options
      if (orientation === 'next') {
        this.hoverIndex === options.length - 1
          ? this.hoverIndex = 0
          : this.hoverIndex += 1
      } else {
        this.hoverIndex === 0
          ? this.hoverIndex = options.length - 1
          : this.hoverIndex -= 1
      }
      this.selectedValue = options[this.hoverIndex].value
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
