<template>
<desktop-layout>
  <template v-slot>
    <div class="forgotpassword">
      <div class="auth-redtitle">Free SIM</div>
      <div class="auth-bigsubtitle">Forgot your password?</div>
      <div class="auth-text">Please enter the e-mail address<br>when creating your account, we’ll send you<br>instruction to reset your password.</div>
      <input type="text" placeholder="Email" />
      <span class="auth-btn action" @click="goSignin">Send</span>
    </div>
  </template>
</desktop-layout>
</template>

<script>
import DesktopLayout from '../components/Layout/DesktopLayout.vue'

export default {
  name: 'Forgot',
  components: {
    DesktopLayout,
  },
  methods: {
    goSignin() {
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="scss" scoped>
div.forgotpassword {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 55px);
  input {
    outline: none;
    max-width: 340px;
    width: 100%;
    border: 1px solid #8A8A8A;
    border-radius: 6px;
    padding: 15px 16px;
    font-size: 15px;
    margin-bottom: 30px;
  }
}
</style>
