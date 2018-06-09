<template>
  <div class="button-demo">
    <h3>按钮</h3>
    <div class="demo">
      <l-button>Button</l-button>
      <l-button type="primary">Button</l-button>
      <l-button type="danger">Button</l-button>
      <l-button icon="home">Button</l-button>
      <l-button type="primary" icon="search">Button</l-button>
      <l-button disabled>Button</l-button>
      <l-button type="text">Button</l-button>
    </div>
    <h3>不同尺寸</h3>
    <div class="demo">
      <l-button size="large">Button</l-button>
      <l-button size="large" type="primary">Button</l-button>
      <l-button>Button</l-button>
      <l-button size="small">Button</l-button>
    </div>
    <div class="demo">
      <l-button shape="circle" icon="home" size="large"></l-button>
      <l-button shape="circle" icon="home"></l-button>
      <l-button shape="circle" icon="home" size="small"></l-button>
    </div>
    <h3>Loading 状态</h3>
    <div class="demo">
      <l-button type="primary" @click="loading = true" :loading="loading">Click Me</l-button>
      <l-button loading>Button</l-button>
    </div>
    <h3>长按钮</h3>
    <div class="demo">
      <l-button long>Button</l-button>
      <l-button type="primary" long>Button</l-button>
    </div>
    <h3>按钮组</h3>
    <div class="demo">
      <l-button-group>
        <l-button>Left</l-button>
        <l-button>Right</l-button>
      </l-button-group>
    </div>
    <div class="demo">
      <l-button-group>
        <l-button>Left</l-button>
        <l-button>Middle</l-button>
        <l-button>Right</l-button>
      </l-button-group>
    </div>
    <div class="demo">
      <l-button-group>
        <l-button icon="align-center"></l-button>
        <l-button icon="align-justify"></l-button>
        <l-button icon="align-left"></l-button>
        <l-button icon="align-right"></l-button>
      </l-button-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    hello() {
      console.log('hello world')
    },
  },
}
</script>

<style lang="scss" scoped>
.button-demo {
  .demo {
    margin: 16px 0;
    > .live-btn {
      margin: 0 8px 16px 0;
    }
  }
}
</style>
