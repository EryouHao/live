<template>
  <div class="">
    <ul>
      <li><l-radio v-model="radioValue" value="1">选项一</l-radio></li>
      <li><l-radio v-model="radioValue" value="2">选项二</l-radio></li>
      <li><l-radio v-model="radioValue" value="3" disabled>禁用选项</l-radio></li>
      <li><l-radio v-model="radioValue" value="4" readonly>只读选项</l-radio></li>
      <li><l-radio v-model="radioValue" value="5" @change="handleChange">监听 change 事件</l-radio></li>
    </ul>
    <ul>
      <li>值：{{ radioValue }}</li>
      <li>change 传值：{{ changeValue }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: '1',
      changeValue: null,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
      this.changeValue = value
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
