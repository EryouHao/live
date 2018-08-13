<template>
  <tbody>
    <tr v-for="(item, dataIndex) in data" :key="dataIndex">
      <td v-for="(column, columnIndex) in columns" :key="columnIndex">
        
        <slot name="tableNode" :text="item[column.key]" :row="item">
          {{ item[column.key] }}
        </slot>

      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    columns: Array,
    data: Array,
  },
  inject: ['scopeSlotNames'],
  data() {
    return {}
  },
  mounted() {
    console.log('customBody: ', this.scopeSlotNames)
  },
  methods: {
    // renderColumn(h, vnode) {
    //   this.$slots.default = vnode
    // },
  },
}
</script>

<style lang="scss" scoped>
</style>
