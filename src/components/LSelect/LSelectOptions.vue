<template>
  <div class="live-option-container">
    <ul>
      <li
        class="live-option"
        :class="{ 'is-active': activeIndex === index, 'is-hover': hIndex === index }"
        v-for="(option, index) in options"
        :key="option.value"
        @click="optionClick(option.value)"
        @mouseover="hoverOption(index)"
      >{{ option.text }}</li>
      <li class="live-option" v-if="options.length === 0">
        No Data
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    activeIndex: Number,
    hoverIndex: Number,
  },
  data() {
    return {
      hIndex: -1,
    }
  },
  mounted() {
    this.hIndex = this.hoverIndex
  },
  methods: {
    optionClick(value) {
      this.$emit('option-click', value)
    },
    hoverOption(index) {
      this.hIndex = index
    },
  },
  watch: {
    hoverIndex(val) {
      this.hIndex = val
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
