<template>
  <div class="button-demo">
    <l-button>Button</l-button>
    <l-button type="primary">Button</l-button>
    <l-button type="danger">Button</l-button>
    <l-button icon="home">Button</l-button>
    <l-button disabled>Button</l-button>
    <div style="margin: 16px 0;">
      <l-button size="large">Button</l-button>
      <l-button size="large" type="primary">Button</l-button>
      <l-button>Button</l-button>
      <l-button size="small">Button</l-button>
    </div>
    <div>
      <l-button shape="circle" icon="home" size="large"></l-button>
      <l-button shape="circle" icon="home"></l-button>
      <l-button shape="circle" icon="home" size="small"></l-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  .live-btn {
    margin: 0 8px 16px 0;
  }
}
</style>
