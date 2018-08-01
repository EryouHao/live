<template>
  <div class="">
    <l-button @click="show">显示</l-button>
    <l-button @click="show2">显示自定义内容</l-button>
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
    show2() {
      const h = this.$createElement
      this.$notification({
        title: '自定义内容',
        content: h('div', { style: 'color: #006cff'}, '这里是自定义带样式的内容'),
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
