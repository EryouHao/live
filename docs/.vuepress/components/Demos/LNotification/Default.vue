<template>
  <div class="">
    <ul>
      <li><l-button @click="show">显示</l-button></li>
      <li><l-button @click="show2">显示自定义内容</l-button></li>
      <li><l-button @click="show3">不会自动关闭</l-button></li>
      <li><l-button @click="show4">自定义延时时间</l-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
    }
  },
  methods: {
    show() {
      console.log('clicked')
      this.$notification({
        title: '提示' + this.index++,
        content: '这里是内容',
      })
    },
    show2() {
      const h = this.$createElement
      this.$notification({
        title: '自定义内容' + this.index++,
        content: h('div', { style: 'color: #006cff'}, '这里是自定义带样式的内容'),
      })
    },
    show3() {
      this.$notification({
        title: '提示' + this.index++,
        content: '此通知不会自动关闭',
        autoClose: false,
      })
    },
    show4() {
      this.$notification({
        title: '提示' + this.index++,
        content: '此通知 5 秒后关闭',
        duration: 5000,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
