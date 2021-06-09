<template>
<desktop-layout>
  <template v-slot>
    <div class="logout">
      <div class="auth-redtitle" style="margin-bottom: 10px;">Free SIM</div>
      <div class="auth-bigsubtitle">Log out</div>
      <div class="auth-text">Are you logging out?<br>We await your return</div>
      <div class="auth-btns">
        <span class="auth-btn action" @click="goBefore">Cancel</span>
        <span class="auth-cancelbtn action" @click="logout">Log Out</span>
      </div>
    </div>
  </template>
</desktop-layout>
</template>

<script>
import DesktopLayout from '../components/Layout/DesktopLayout.vue'

export default {
  name: 'Logout',
  components: {
    DesktopLayout,
  },
  methods: {
    goBefore() {
      this.$router.go(-1)
    },
    logout() {
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="scss" scoped>
div.logout {
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
