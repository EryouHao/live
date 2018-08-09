<template>
  <div class="">
    <div class="selector">
      <l-radio v-model="offset" :value="2">2</l-radio>
      <l-radio v-model="offset" :value="4">4</l-radio>
      <l-radio v-model="offset" :value="8">8</l-radio>
    </div>
    <l-row>
      <l-col :span="8">8</l-col>
      <l-col :span="8" :offset="offset">8</l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: 2,
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
