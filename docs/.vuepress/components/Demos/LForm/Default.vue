<template>
  <div class="">
    <l-form>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
        agree: true,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
