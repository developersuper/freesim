<template>
  <div class="auth-container">
    <h1 class="auth-title">Create account</h1>
    <h5 class="auth-subtitle">Already have an account? <router-link to="/signin"><span class="action" style="color: #ff7777;">Log In</span></router-link></h5>
    <div class="auth-social-btns">
      <SocialButton :iconUrl="require('../assets/images/icons/facebook.png')" text="Continue With Facebook"/>
      <SocialButton :iconUrl="require('../assets/images/icons/google.png')" text="Continue With Google"/>
      <SocialButton :iconUrl="require('../assets/images/icons/apple.png')" text="Continue With Apple"/>
    </div>
  </div>
</template>

<script>
import SocialButton from '../components/Auth/SocialButton.vue'

export default {
  name: 'Signup',
  components: {
    SocialButton,
  }
}
</script>

<style lang="scss" scoped>

</style>
