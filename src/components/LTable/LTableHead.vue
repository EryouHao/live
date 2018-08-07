<template>
  <thead class="live-thead">
    <!-- TODO: 将 index 改成 _lid -->
    <th v-for="(item, index) in columns" :key="index">{{ item.title }}</th>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>
