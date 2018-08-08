<template>
  <l-table :columns="columns" :data="data"></l-table>
</template>

<script>
const columns = [
  {
    key: 'name',
    title: '属性',
  },
  {
    key: 'description',
    title: '说明',
  },
  {
    key: 'type',
    title: '类型',
  },
  {
    key: 'default',
    title: '默认值',
  },
]

const data = [
  {
    name: 'type',
    description: '按钮类型，可选值：[ default | primary | danger ]',
    type: 'string',
    default: 'default',
  },
  {
    name: 'size',
    description: '按钮尺寸，可选值：[ large | small ]',
    type: 'string',
    default: '-',
  },
  {
    name: 'shape',
    description: '按钮形状，可选值：[ circle ]',
    type: 'string',
    default: '-',
  },
  {
    name: 'loading',
    description: '按钮 loading 状态',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'long',
    description: '块级按钮',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'icon',
    description: '按钮图标，具体值可参见 https://material.io/tools/icons/',
    type: 'string',
    default: '-',
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
