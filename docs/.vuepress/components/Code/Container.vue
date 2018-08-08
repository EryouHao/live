<template>
  <div class="code-container" :class="{ 'is-all' : all }">
    <slot></slot>
    <l-button class="btn-all" long @click="all = !all">{{ all ? 'Hide code' : 'Show all code' }}</l-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.code-container {
  height: 160px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  &.is-all {
    height: 100%;
  }
}
.btn-all {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>
