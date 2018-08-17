<template>
  <div class="">
    <br><br>
    <l-row>
      <l-col :span="8"><l-tag closable>可关闭</l-tag></l-col>
      <l-col :span="8"><l-tag closable color="#000">可关闭</l-tag></l-col>
      <l-col :span="8"><l-tag closable type="danger" @close="handleClose">带回调</l-tag></l-col>
    </l-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$notification.success(`关闭后的回调`)
    },
  },
}
</script>
