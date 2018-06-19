<template>
  <div class="select-demo">
    <l-select v-model="modelValue1" style="width: 200px;" :options="options1"></l-select>value: {{ modelValue1 }}
    <l-select v-model="modelValue2" style="width: 200px;" :options="options1"></l-select>value: {{ modelValue2 }}
    <h3>无数据</h3>
    <l-select v-model="modelValue3" style="width: 200px;"></l-select>
    <h3>可搜索</h3>
    <l-select v-model="modelValue4" style="width: 200px;" :options="options2" filterable></l-select>
    value: {{ modelValue4 }}
    <l-button type="primary" @click="showValue">Show Value</l-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue1: 2,
      modelValue2: null,
      modelValue3: null,
      modelValue4: null,
      options1: [
        {
          text: 'Item1',
          value: 1,
        },
        {
          text: 'Item2',
          value: 2,
        },
        {
          text: 'Item3',
          value: 3,
        },
      ],
      options2: [
        {
          text: 'Bob',
          value: 1,
        },
        {
          text: 'Jack',
          value: 2,
        },
        {
          text: 'Jack2',
          value: 3,
        },
        {
          text: 'Tom',
          value: 4,
        },
      ],
    }
  },
  methods: {
    showValue() {
      console.log(this.modelValue4)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
