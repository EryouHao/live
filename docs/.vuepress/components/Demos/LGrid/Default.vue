<template>
  <div class="">
    <div class="selector">
      <l-radio v-model="columns" v-for="i in [1, 2, 3, 4, 6, 8]" :value="i">{{ i }}</l-radio>
    </div>
    <l-row>
      <l-col :span="24 / columns" v-for="i in columns">{{ 24 / columns }}</l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: 4,
    }
  },
}
</script>

<style lang="scss" scoped>
.live-col {
  height: 50px;
  background: #006CFF;
  text-align: center;
  line-height: 50px;
  color: #fff;
  &:nth-child(2n) {
    background: #004cb3;
  }
}
.live-row {
  margin-bottom: 24px;
  padding: 8px;
  background: #eee;
}
.selector {
  margin: 16px 0;
}
</style>
