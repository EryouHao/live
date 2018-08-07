<template>
  <div class="live-table-container">
    <table class="live-table" :class="{ 'is-border': border }">
      <l-table-head :columns="columns"></l-table-head>
      <l-table-body :columns="columns" :data="data"></l-table-body>
    </table>
  </div>
</template>

<script>
import LTableHead from './LTableHead.vue'
import LTableBody from './LTableBody.vue'

export default {
  name: 'LTable',
  components: {
    LTableHead,
    LTableBody,
  },
  props: {
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
    border: Boolean,
  },
  data() {
    return {}
  },
  computed: {
  },
}
</script>
