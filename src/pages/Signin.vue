<template>
<desktop-layout>
  <template v-slot>
    <div class="auth-container">
      <h1 class="auth-title">Welcome back</h1>
      <h5 class="auth-subtitle">Don't have an account? <router-link to="/signup"><span class="action" style="color: #00DE5E;">Sign Up Free</span></router-link></h5>
      <div class="auth-form">
        <div class="input-block">
          <input type="text" name="email" id="email" required spellcheck="false" autocomplete="off" :style="emailStyle" v-model="email">
          <span class="placeholder" :style="emailStatus === 'required' ? {color: '#FF7777'} : {}">
            Email or Username
          </span>
          <span v-if="emailStatus === 'required'" class="error">Email or Username is required</span>
        </div>
        <div class="input-block">
          <input type="password" name="password" id="password" required spellcheck="false" autocomplete="off" :style="passStyle" v-model="password">
          <span class="placeholder" :style="passStatus === 'required' ? {color: '#FF7777'} : {}">
            Password
          </span>
          <span class="forgot action" >
            Forgot?
          </span>
          <span v-if="passStatus === 'required'" class="error">Password is required</span>
        </div>
        <div class="remember-me">
          <label class="container">Remember me
            <input type="checkbox" v-model="rememberMe">
            <span class="checkmark"></span>
            <span class="checkmark-icon">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6562 0L3.9375 9.58594L1.40625 7.66406H0L3.9375 14.0625L14.0625 0H12.6562Z" fill="white"/>
              </svg>
            </span>
          </label>
        </div>
      </div>
      <div class="auth-social-btns">
        <SocialButton :iconUrl="require('../assets/images/icons/facebook.png')" text="Continue With Facebook"/>
        <SocialButton :iconUrl="require('../assets/images/icons/google.png')" text="Continue With Google"/>
        <SocialButton :iconUrl="require('../assets/images/icons/apple.png')" text="Continue With Apple"/>
      </div>
    </div>
  </template> 
</desktop-layout>
</template>

<script>
import SocialButton from '../components/Auth/SocialButton.vue'
import DesktopLayout from '../components/Layout/DesktopLayout.vue'

export default {
  name: 'Signin',
  components: {
    SocialButton,
    DesktopLayout,
  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: true,
      emailStatus: '',
      passStatus: '',
      emailStyle: {},
      passStyle: {}
    }
  },
  watch: {
    email: function(email, prevEmail) {
      if(email !== '') {
        this.emailStatus = 'filled'
        this.emailStyle = {
          borderColor: '#00DE5E'
        }
      }
      if(prevEmail !== '' && email === ''){
        this.emailStatus = 'required'
        this.emailStyle = {
          borderColor: '#FF7777'
        }
      }
    },
    password: function(password, prevPass) {
      if(password !== '') {
        this.passStatus = 'filled'
        this.passStyle = {
          borderColor: '#00DE5E'
        }
      }
      if(prevPass !== '' && password === ''){
        this.passStatus = 'required'
        this.passStyle = {
          borderColor: '#FF7777'
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
