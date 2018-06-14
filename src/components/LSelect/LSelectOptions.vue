<template>
  <div class="live-option-container">
    <ul>
      <li class="live-option" v-for="option in options" :key="option.value" @click="optionClick(option.value)">{{ option.text }}</li>
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
  },
  data() {
    return {
    }
  },
  methods: {
    optionClick(value) {
      this.$emit('option-click', value)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
