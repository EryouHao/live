<template>
  <div class="">
    <div class="selector">
      <l-radio v-model="justify" value="start">start</l-radio>
      <l-radio v-model="justify" value="center">center</l-radio>
      <l-radio v-model="justify" value="end">end</l-radio>
      <l-radio v-model="justify" value="space-around">space-around</l-radio>
      <l-radio v-model="justify" value="space-between">space-between</l-radio>
    </div>
    <l-row :justify="justify">
      <l-col :span="3">3</l-col>
      <l-col :span="3">3</l-col>
      <l-col :span="3">3</l-col>
      <l-col :span="3">3</l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      justify: 'center',
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
.item1 {
  height: 30px;
}
.item2 {
  height: 20px;
}
.selector {
  margin: 16px 0;
}
</style>
