<template>
  <div class="date-picker-demo">
    <div class="demo">
      <l-date-picker v-model="date1" placeholder="YYYY-MM-DD"></l-date-picker>
      <div>选中的值：{{ date1 }}</div>
    </div>
    <h3>格式化</h3>
    <div class="demo">
      <l-date-picker v-model="date2" format="YYYY/MM/DD"></l-date-picker>
      <div>选中的值：{{ date2 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date1: null,
      date2: null,
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
