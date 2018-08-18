<template>
  <div class="">
    <l-dropdown>
      <l-button>
        下拉菜单 <i class="material-icons">expand_more</i>
      </l-button>
      <l-dropdown-list slot="list">
        <l-dropdown-item>选项一</l-dropdown-item>
        <l-dropdown-item>选项二</l-dropdown-item>
        <l-dropdown-item>选项三</l-dropdown-item>
        <l-dropdown-item>选项四是长文本</l-dropdown-item>
        <l-dropdown-item disabled>禁用项</l-dropdown-item>
      </l-dropdown-list>
    </l-dropdown>
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
</style>
