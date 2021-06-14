<template>
<desktop-layout>
  <template v-slot>
    <div class="auth-container">
      <h1 class="auth-title">Create account</h1>
      <h5 class="auth-subtitle">Already have an account? <router-link to="/signin"><span class="action" style="color: #ff7777;">Log In</span></router-link></h5>
      <div class="auth-form">
        <div class="input-block">
          <input type="text" name="email" id="email" required spellcheck="false" autocomplete="off" :style="emailStyle" v-model="email">
          <span class="placeholder" :style="emailStatus === 'required' ? {color: '#FF7777'} : {}">
            Name
          </span>
          <span v-if="emailStatus === 'required'" class="error">Name is required</span>
        </div>
        <div class="input-block">
          <input type="text" name="email" id="email" required spellcheck="false" autocomplete="off" :style="emailStyle" v-model="email">
          <span class="placeholder" :style="emailStatus === 'required' ? {color: '#FF7777'} : {}">
            Email
          </span>
          <span v-if="emailStatus === 'required'" class="error">Email is required</span>
        </div>
        <div class="input-block">
          <input type="password" name="email" id="email" required spellcheck="false" autocomplete="off" :style="emailStyle" v-model="email">
          <span class="placeholder" :style="emailStatus === 'required' ? {color: '#FF7777'} : {}">
            Password
          </span>
          <span v-if="emailStatus === 'required'" class="error">Password is required</span>
        </div>
        <div class="input-block">
          <input type="password" name="email" id="email" required spellcheck="false" autocomplete="off" :style="emailStyle" v-model="email">
          <span class="placeholder" :style="emailStatus === 'required' ? {color: '#FF7777'} : {}">
            Confirm Password
          </span>
          <span v-if="emailStatus === 'required'" class="error">Confirm Password is required</span>
        </div>
        <div class="signup-btn-wrapper">
          <div class="auth-btn action" @click="goChatting">Sign Up</div>
        </div>
      </div>
      <div class="auth-social-btns">
        <div class="signup-with">
          <span class="line">
            <svg width="103" height="1" viewBox="0 0 103 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="103" y2="0.5" stroke="#EB5757"/>
            </svg>
          </span>
          <span class="text">Sign Up with</span>
          <span class="line">
            <svg width="103" height="1" viewBox="0 0 103 1" fill="none" xmlns="http://www.w3.org/2000/svg">
             <line y1="0.5" x2="103" y2="0.5" stroke="#EB5757"/>
            </svg>
          </span>
        </div>
        <SocialButton :iconUrl="require('../assets/images/icons/facebook.png')" text="Continue With Facebook"/>
        <SocialButton :iconUrl="require('../assets/images/icons/google.png')" text="Continue With Google"/>
        <SocialButton :iconUrl="require('../assets/images/icons/apple.png')" text="Continue With Apple"/>
      </div>
    </div>
  </template>
</desktop-layout>
</template>

<script>
import DesktopLayout from '../components/Layout/DesktopLayout.vue'
import SocialButton from '../components/Auth/SocialButton.vue'

export default {
  name: 'Signup',
  components: {
    SocialButton,
    DesktopLayout,
  },
  methods: {
    goChatting () {
      this.$router.push('/signin')
    }
  }
}
</script>

<style lang="scss" scoped>
div.signup-btn-wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-top: 30px;
}
div.signup-with {
  display: flex;
  width: 100%;
  justify-content: space-between;
  span.text {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #EB5757;
    margin-bottom: 30px;
  }
}
</style>
