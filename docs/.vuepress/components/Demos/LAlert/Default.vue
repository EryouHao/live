<template>
  <div class="alert-demo">
    <l-alert class="alert">这是提示文字！(默认)</l-alert>
    <l-alert class="alert" type="primary">这是提示文字！</l-alert>
    <l-alert class="alert" type="success">这是提示文字！</l-alert>
    <l-alert class="alert" type="info">这是提示文字！</l-alert>
    <l-alert class="alert" type="danger">这是提示文字！</l-alert>
    <l-alert class="alert" showIcon>这是提示文字！带图标</l-alert>
    <l-alert class="alert" type="primary" showIcon>这是提示文字！带图标</l-alert>
    <l-alert class="alert" type="success" showIcon>这是提示文字！带图标</l-alert>
    <l-alert class="alert" type="info" showIcon>这是提示文字！带图标</l-alert>
    <l-alert class="alert" type="danger" showIcon>这是提示文字！带图标</l-alert>
    <l-alert class="alert" icon="access_alarms">这是提示文字！自定义图标</l-alert>
    <l-alert class="alert" icon="access_alarms" closable>这是提示文字！(可关闭)</l-alert>
    <l-alert class="alert" showIcon title="注意" closable>这是提示文字！(带标题)</l-alert>
    <l-alert class="alert" showIcon title="长文本" closable>
      我如果爱你，绝不像攀援①的凌霄花，借你的高枝炫耀自己；我如果爱你，绝不学痴情的鸟儿，为绿荫重复单调的歌曲；也不止像泉源，常年送来清凉的慰藉②；也不止像险峰，增加你的高度，衬托你的威仪。甚至日光，甚至春雨。
    </l-alert>
    <l-alert class="alert" color="#000000">这是提示文字！(自定义颜色)</l-alert>
    <l-alert class="alert" type="primary">
      这是提示文字！(自定义关闭按钮)
      <l-button slot="close" type="primary">点我关闭</l-button>
    </l-alert>
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
.alert-demo {
  .alert {
    margin-bottom: 16px;
  }
}
</style>
