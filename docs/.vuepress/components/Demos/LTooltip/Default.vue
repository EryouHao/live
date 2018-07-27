<template>
  <div class="">
    <div class="tooltip-demo">
      <div class="item">
        <l-tooltip content="这是提示文字" placement="left">
          <l-button>左</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-button>上</l-button>
      </div>
      <div class="item">
        <l-button>下</l-button>
      </div>
      <div class="item">
        <l-button>右</l-button>
      </div>
    </div>
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
.tooltip-demo {
  display: inline-flex;
  .item {
    margin: 16px;
  }
}
</style>
