<template>
  <div class="">
    <l-row>
      <l-col class="item" :span="8" v-for="item in placementList" :key="item">
        <l-dropdown :placement="item">
          <l-button>
            {{ item }} <i class="material-icons">expand_more</i>
          </l-button>
          <l-dropdown-list slot="list">
            <l-dropdown-item>选项一</l-dropdown-item>
            <l-dropdown-item>选项二</l-dropdown-item>
            <l-dropdown-item>选项三是长文本长文本</l-dropdown-item>
          </l-dropdown-list>
        </l-dropdown>
      </l-col>
    </l-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      placementList: ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'],
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 16px;
}
</style>
