<template>
  <tbody>
    <tr v-for="(item, dataIndex) in data" :key="dataIndex">
      <td v-for="(column, columnIndex) in columns" :key="columnIndex">
        <span v-if="!column.scopedSlots">
          {{ item[column.key] }}
        </span>
        <slot :name="column.key" :row="item" v-else>
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
  data() {
    return {}
  },
  mounted() {
    console.log('slot::: ', this.$scopedSlots)
  },
}
</script>

<style lang="scss" scoped>
</style>
