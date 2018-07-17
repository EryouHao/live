<template>
  <div class="live-date-picker-container" v-click-outside="hide" @click="visible = true">
    <l-input readonly style="width: 240px;">
      <span slot="prefix"><i class="fa fa-calendar-o"></i></span>
    </l-input>
    <transition name="fade-select">
      <div class="live-calendar-container" v-if="visible">
        <div class="live-calendar-header">
          <div class="year-month">
            2018 年 07月
          </div>
          <div class="btn-container">
            <span class="btn-jump btn-jump-left">
              <i class="fa fa-angle-left arrow-left"></i>
            </span>
            <span class="btn-jump btn-jump-right">
              <i class="fa fa-angle-right arrow-right"></i>
            </span>
          </div>
        </div>
        <div class="live-calendar-body">
          <div class="weeks">
            <div class="week" v-for="item in weeksLabel" :key="item">{{ item }}</div>
          </div>
          <div class="days">
            <div class="day" v-for="i in 30" :key="i">{{ i }}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import LInput from '../LInput/LInput.vue'

export default {
  name: 'LDatePicker',
  components: {
    LInput,
  },
  data() {
    return {
      weeksLabel: ['日', '一', '二', '三', '四', '五', '六'],
      visible: false,
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
