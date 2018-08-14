<template>
  <div class="">
    <l-table :columns="columns" :data="data">
      <span slot="customTitle">
        <l-button type="text" icon="hand-spock-o" size="small"></l-button>
        Name
      </span>
      <span slot="action" slot-scope="{ row }">
        <l-button type="text" icon="edit" size="small"></l-button>
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
    scopedSlots: { customRender: 'action' },
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
