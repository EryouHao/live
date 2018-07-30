<template>
  <div class="">
    <div class="tooltip-demo">
      <div class="item">
        <l-tooltip content="这是提示文字" placement="left">
          <l-button>左</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" placement="top">
          <l-button>上</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" placement="bottom">
          <l-button>下</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" placement="right">
          <l-button>右</l-button>
        </l-tooltip>
      </div>
    </div>
    <h3>暗色主题</h3>
    <div class="tooltip-demo">
      <div class="item">
        <l-tooltip content="这是提示文字" dark placement="left">
          <l-button>左</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" dark placement="top">
          <l-button>上</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" dark placement="bottom">
          <l-button>下</l-button>
        </l-tooltip>
      </div>
      <div class="item">
        <l-tooltip content="这是提示文字" dark placement="right">
          <l-button>右</l-button>
        </l-tooltip>
      </div>
    </div>
    <h3>最大宽度</h3>
    <div class="tooltip-demo">
      <div class="item">
        <l-tooltip max-width="200" content="这是提示文字，这是提示文字，这是提示文字，这是提示文字，这是提示文字，这是提示文字" placement="right">
          <l-button>右</l-button>
        </l-tooltip>
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
  display: flex;
  .item {
    margin: 16px;
  }
}
</style>
