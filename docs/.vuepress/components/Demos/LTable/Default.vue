<template>
  <div class="">
    <l-table :columns="columns" :data="data"></l-table>
    <br><br>
    <l-table :columns="columns" :data="data" border></l-table>
    <br><br>
    <l-table :columns="columns" :data="data">
      <span slot="customTitle">
        Name <l-button type="text" icon="search" size="small"></l-button>
      </span>
      <span slot="action" slot-scope="{ row }">
        <l-button type="primary">{{ row.age }}</l-button>
      </span>
    </l-table>
  </div>
</template>

<script>
const columns = [
  {
    key: 'name',
    title: 'Name',
    slots: { title: 'customTitle' },
  },
  {
    key: 'age',
    title: 'Age',
  },
  {
    key: 'address',
    title: 'Address',
  },
  {
    key: 'action',
    title: 'Action',
    scopedSlots: { customRender: 'name' },
  }
]

const data = [
  {
    name: 'Xiao Ming',
    age: 18,
    address: 'Bei Jing'
  },
  {
    name: 'Xiao Hong',
    age: 16,
    address: 'Hai Nan',
  },
  {
    name: 'Xiao Fang',
    age: 20,
    address: 'He Bei',
  },
]

export default {
  data() {
    return {
      columns,
      data,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
