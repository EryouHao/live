<template>
  <div class="live-table-container">
    <table class="live-table" :class="{ 'is-border': border }">
      <l-table-head :columns="columns"></l-table-head>
      <l-table-body :columns="columns" :data="data">
        <span :slot="column.key" v-for="column in columns" :key="column.key" slot-scope="{ row }">
          <slot :name="column.key" :row="row"></slot>
        </span>
      </l-table-body>
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
      table: this,
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
    this.scopeSlotNameList = (this.$scopedSlots && Object.keys(this.$scopedSlots)) || []
    console.log('list: ', this.scopeSlotNameList)
  },
}
</script>
