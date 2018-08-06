<template>
  <div class="">
    <l-button type="primary" @click="visible = true">open</l-button>
    <l-dialog v-model="visible" title="提示">
      这是一条提示信息
      <div slot="footer">
        <l-button @click="visible = false">确定</l-button>
      </div>
    </l-dialog>

    <l-button type="primary" @click="visible1 = true">自定义带 icon 标题</l-button>
    <l-dialog v-model="visible1">
      <div slot="title" class="icon-title">
        <i class="material-icons">mood</i>带 icon 标题
      </div>
      这是一条提示信息
      <div slot="footer">
        <l-button @click="visible1 = false">确定</l-button>
      </div>
    </l-dialog>

    <l-button type="primary" @click="visible2 = true">指定宽度 500px</l-button>
    <l-dialog v-model="visible2" title="提示" width="500px">
      这是一条提示信息，此 Dialog 宽度为 500px
      <div slot="footer">
        <l-button @click="visible2 = false">确定</l-button>
      </div>
    </l-dialog>

    <l-button type="primary" @click="visible3 = true">指定宽度 10%</l-button>
    <l-dialog v-model="visible3" title="提示" width="50%">
      这是一条提示信息，此 Dialog 宽度为 50%
      <div slot="footer">
        <l-button @click="visible3 = false">确定</l-button>
      </div>
    </l-dialog>

    <l-button type="primary" @click="visible4 = true">禁用遮罩层关闭</l-button>
    <l-dialog v-model="visible4" title="提示" width="50%" maskDisabled>
      这是一条提示信息，点击遮罩层不可关闭
      <div slot="footer">
        <l-button type="primary" @click="visible4 = false">确定</l-button>
      </div>
    </l-dialog>

    <l-button type="primary" @click="visible6 = true">和表单组合使用</l-button>
    <l-dialog v-model="visible6" title="登录" width="50%" noFooter>
      <l-form :label-width="80">
        <l-form-item label="用户名">
          <l-input placeholder="请输入" v-model="form.username"></l-input>
        </l-form-item>
        <l-form-item label="密码">
          <l-input placeholder="请输入" type="password" v-model="form.password"></l-input>
        </l-form-item>
        <l-form-item>
          <l-checkbox v-model="form.agree">我已阅读并同意网站协议</l-checkbox>
        </l-form-item>
        <l-form-item>
          <l-button type="primary" long>登 录</l-button>
        </l-form-item>
      </l-form>
    </l-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible6: false,
      form: {
        username: null,
        password: null,
        agree: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.icon-title {
  display: flex;
  align-items: center;
}
</style>
