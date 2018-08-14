<template>
  <thead class="live-thead">
    <!-- TODO: 将 index 改成 _lid -->
    <th v-for="(item, index) in columns" :key="index">
      <template v-if="item.slots && item.slots.title && table.$slots[item.slots.title]">
        {{ renderTitle($createElement, table.$slots[item.slots.title]) }}
        <slot></slot>
      </template>
      <template v-else>
        {{ item.title }}
      </template>
    </th>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
    },
  },
  inject: ['table'],
  data() {
    return {}
  },
  methods: {
    renderTitle(h, vnode) {
      this.$slots.default = vnode
    },
  },
}
</script>
