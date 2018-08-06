<template>
  <div class="">
    <l-button type="primary" @click="visible = true">open</l-button>
    <l-dialog v-model="visible" title="提示">
      这是一条提示信息
    </l-dialog>

    <l-button type="primary" @click="visible2 = true">指定宽度 500px</l-button>
    <l-dialog v-model="visible2" title="提示" width="500px">
      这是一条提示信息，此 Dialog 宽度为 500px
    </l-dialog>

    <l-button type="primary" @click="visible3 = true">指定宽度 10%</l-button>
    <l-dialog v-model="visible3" title="提示" width="50%">
      这是一条提示信息，此 Dialog 宽度为 50%
    </l-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
