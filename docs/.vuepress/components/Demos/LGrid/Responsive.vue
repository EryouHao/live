<template>
  <div class="">
    <div class="selector"></div>
    <l-row>
      <l-col :xs="24" :md="12" :lg="6" :xl="6">first</l-col>
      <l-col :xs="24" :md="12" :lg="6" :xl="6">second</l-col>
      <l-col :xs="24" :md="12" :lg="6" :xl="6">third</l-col>
      <l-col :xs="24" :md="12" :lg="6" :xl="6">fourth</l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
