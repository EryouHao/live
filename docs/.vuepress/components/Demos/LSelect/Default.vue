<template>
  <div class="select-demo">
    <div>
      value: {{ modelValue }}
    </div>
    <l-select v-model="modelValue" style="width: 200px;" :options="options1"></l-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 2,
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
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
