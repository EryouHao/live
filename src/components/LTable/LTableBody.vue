<template>
  <tbody>
    <tr v-for="(item, dataIndex) in data" :key="dataIndex">
      <td v-for="(column, columnIndex) in columns" :key="columnIndex">
        {{ item[column.key] }}
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
}
</script>

<style lang="scss" scoped>
</style>
