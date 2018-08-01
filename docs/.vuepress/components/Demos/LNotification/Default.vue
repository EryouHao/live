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
      this.$notification({
        title: '提示',
        content: '这里是内容',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
