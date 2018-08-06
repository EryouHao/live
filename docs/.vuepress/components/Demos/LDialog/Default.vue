<template>
  <div class="">
    <l-button type="primary" @click="visible = true">open</l-button>
    <l-dialog v-model="visible" title="提示">
      这是一条提示信息
    </l-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
