<template>
  <div class="">
    <l-radio v-model="align" value="top">top</l-radio>
    <l-radio v-model="align" value="center">center</l-radio>
    <l-radio v-model="align" value="bottom">bottom</l-radio>
    <l-row justify="space-between" :align="align">
      <l-col :span="3"><div class="item1">3</div></l-col>
      <l-col :span="3"><div class="item2">3</div></l-col>
      <l-col :span="3"><div class="item3">3</div></l-col>
      <l-col :span="3"><div class="item4">3</div></l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      align: 'top',
    }
  },
}
</script>

<style lang="scss" scoped>
.live-col {
  text-align: center;
  color: #fff;
}
.live-row {
  margin-bottom: 24px;
  padding: 8px;
  background: #eee;
}
.item1 {
  height: 50px;
  background: #006CFF;
  line-height: 50px;
}
.item2 {
  height: 30px;
  background: #006CFF;
  line-height: 30px;
}

.item3 {
  height: 40px;
  background: #006CFF;
  line-height: 40px;
}
.item4 {
  height: 20px;
  background: #006CFF;
  line-height: 20px;
}
</style>
