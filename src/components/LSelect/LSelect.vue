<template>
  <div :class="classes">
    <input type="text" class="live-select-input" readonly>
    <i class="fa fa-angle-down live-select-icon"></i>
    <div class="live-option-container">
      <ul>
        <li>选项一</li>
        <li>选项二</li>
        <li>选项三</li>
        <li>选项四</li>
        <li>选项五选项五选项五选项五选项五选项五选项五</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LSelect',
  props: {

  },
  data() {
    return {
    }
  },
  computed: {
    classes() {
      return [{
        'live-select-container': true,
      }]
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
