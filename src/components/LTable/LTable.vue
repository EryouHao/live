<template>
  <div class="live-table-container">
    <table class="live-table" :class="{ 'is-border': border }">
      <l-table-head :columns="columns"></l-table-head>
      <l-table-body :columns="columns" :data="data"></l-table-body>
      
      <template slot="tableNode" slot-scope="{ row }">
        <slot v-for="name in scopeSlotNameList" :name="name" :row="row"></slot>
      </template>

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
  provide() {
    return {
      customHead: this.$slots,
      scopeSlotNames: this.scopeSlotNames,
    }
  },
  data() {
    return {
      scopeSlotNameList: null,
    }
  },
  mounted() {
    console.log(this.$slots)
    console.log(this.$scopedSlots)
    this.scopeSlotNameList = Object.keys(this.$scopedSlots)
  },
}
</script>
