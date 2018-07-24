<template>
  <div class="">
    <l-radio v-model="radioValue" l-value="1">选项一</l-radio>
    <l-radio v-model="radioValue" l-value="2">选项二</l-radio>
    值：{{ radioValue }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: null,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
