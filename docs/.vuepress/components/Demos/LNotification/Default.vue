<template>
  <div class="">
    <l-button @click="show">显示</l-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    show() {
      console.log('clicked')
      this.$notification('hello')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
