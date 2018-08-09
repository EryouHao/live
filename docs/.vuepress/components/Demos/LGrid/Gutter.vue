<template>
  <div class="">
    <l-radio v-model="gutter" :value="8">8</l-radio>
    <l-radio v-model="gutter" :value="16">16</l-radio>
    <l-radio v-model="gutter" :value="32">32</l-radio>
    <l-row :gutter="gutter">
      <l-col :span="6"><div class="item">3</div></l-col>
      <l-col :span="6"><div class="item">3</div></l-col>
      <l-col :span="6"><div class="item">3</div></l-col>
      <l-col :span="6"><div class="item">3</div></l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gutter: 8,
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
.item {
  height: 50px;
  background: #006CFF;
  line-height: 50px;
}
</style>
