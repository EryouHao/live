<template>
  <div class="date-picker-demo">
    <div class="demo">
      <l-date-picker v-model="date"></l-date-picker>
      <div>选中的值：{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.date-picker-demo {
  .demo {
    margin: 16px 0;
    > .live-btn {
      margin: 0 8px 16px 0;
    }
  }
}
</style>
