<template>
  <div class="input-demo">
    <l-input class="demo"></l-input>
    <l-input class="demo" placeholder="Username"></l-input>
    <l-input class="demo" v-model="text"></l-input>
    {{ text }}
    <l-input class="demo" placeholder="Username">
      <span slot="prefix"><i class="fa fa-user"></i></span>
    </l-input>
    <l-input class="demo" placeholder="Please input...">
      <span slot="suffix"><i class="fa fa-search"></i></span>
    </l-input>
    <l-input class="demo" placeholder="Please input...">
      <l-button slot="suffix">Search</l-button>
    </l-input>
    <l-input class="demo" placeholder="Please input...">
      <l-button type="primary" slot="suffix">Search</l-button>
    </l-input>
    <h3>不同大小</h3>
    <l-input size="large" class="demo" placeholder="Live UI"></l-input>
    <l-input class="demo" placeholder="Live UI"></l-input>
    <l-input size="small" class="demo" placeholder="Live UI"></l-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Live UI',
    }
  },
}
</script>

<style lang="scss" scoped>
.input-demo {
  .demo {
    margin: 16px 0;
  }
}
</style>
