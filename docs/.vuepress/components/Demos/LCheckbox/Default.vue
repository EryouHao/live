<template>
  <div class="">
    <ul>
      <li>
        <l-checkbox v-model="values" :value="1">选项一</l-checkbox>
        <l-checkbox v-model="values" :value="2">选项二</l-checkbox>
        <div>
          选中的数组值为：{{ values }}
        </div>
      </li>
      <li>
        <l-checkbox v-model="value2">单个选项</l-checkbox>
        <div>单个选项值为：{{ value2 }}</div>
      </li>
      <li>
        <l-checkbox v-model="value3" @change="changeHandle">监听 change 事件选项</l-checkbox>
        <div>
          change 传值：{{ changeValue }}
        </div>
      </li>
      <li>
        <l-checkbox v-model="value4" disabled>禁用的选项</l-checkbox>
        <l-checkbox v-model="value5" readonly>只读的选项</l-checkbox>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      values: [],
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      changeValue: null,
    }
  },
  methods: {
    changeHandle(value) {
      this.changeValue = value
      console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
