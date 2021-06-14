<template>
  <desktop-layout>
    <template v-slot>
      <div class="settings">
        <div class="settings-leftpart">
          <div class="settings-lists">
            <span class="settings-title">Settings</span>
            <span 
              v-for="setting in settings" 
              :class="selected === setting ? {'settings-list-active': true} : {'settings-list action': true}" 
              :key="setting" 
              @click="selected = setting">
              {{setting}}
            </span>
          </div>
        </div>
        <div class="settings-rightpart">
          <div class="settings-body">
            <div v-if="selected==='Account'" class="account">
              <span class="settings-body-title">Account</span>
              <div class="text-input">
                <span class="label">Your phone number</span>
                <input type="text">
              </div>
              <div class="text-input">
                <span class="label">Username</span>
                <input type="text">
              </div>
              <div class="text-input">
                <span class="label">First name</span>
                <input type="text">
              </div>
              <div class="text-input">
                <span class="label">Last name</span>
                <input type="text">
              </div>
              <div class="text-input">
                <span class="label">Email</span>
                <input type="text">
              </div>
              <div class="messaging-btn-wrapper">
                <span class="cancel-btn">Cancel</span>
                <span class="messaging-btn action">Save</span>
              </div>
            </div>
            <div v-if="selected==='Password'" class="password">
              <span class="settings-body-title">Change Password</span>
              <div class="text-input">
                <span class="label">Old password</span>
                <input type="password">
              </div>
              <div class="text-input">
                <span class="label">New password</span>
                <input type="password">
              </div>
              <div class="text-input">
                <span class="label">Confirm password</span>
                <input type="password">
              </div>
              <div class="messaging-btn-wrapper">
                <span class="messaging-btn action">Save</span>
              </div>
            </div>
            <div v-if="selected==='Notification'" class="notifications">
              <span class="settings-body-title" style="padding-left: 39px;">Notifications</span>
              <div class="radio-input action" @click="notificationsound = !notificationsound">
                <span class="custom-radio">
                  <span :style="{display: notificationsound ? 'block' : 'none'}"></span>
                </span>
                <div class="radio-input-text">
                  <span class="radio-input-text-title">Notification Sound</span>
                  <span class="radio-input-text-subtitle">Play a notification sound when I receive an incoming text or call</span>
                </div>
              </div>
              <div class="radio-input action" @click="allsound = !allsound">
                <span class="custom-radio">
                  <span :style="{display: allsound ? 'block' : 'none'}"></span>
                </span>
                <div class="radio-input-text">
                  <span class="radio-input-text-title">All Sounds</span>
                  <span class="radio-input-text-subtitle">Play all sounds from TextNow (excluding notification sound)</span>
                </div>
              </div>
              <div class="radio-input action" @click="desktop = !desktop">
                <span class="custom-radio">
                  <span :style="{display: desktop ? 'block' : 'none'}"></span>
                </span>
                <div class="radio-input-text">
                  <span class="radio-input-text-title">Desktop</span>
                  <span class="radio-input-text-subtitle">Show a desktop notification when I receive an incoming text</span>
                </div>
              </div>
              <div class="radio-input action" @click="email = !email">
                <span class="custom-radio">
                  <span :style="{display: email ? 'block' : 'none'}"></span>
                </span>
                <div class="radio-input-text">
                  <span class="radio-input-text-title">Email</span>
                  <span class="radio-input-text-subtitle">Send me an email when I receive a text</span>
                </div>
              </div>

            </div>
            <div v-if="selected==='Messaging'" class="messaging">
              <span class="settings-body-title">Messaging</span>
              <div class="text-input">
                <input type="text" placeholder="Add signature to your messaging" style="padding-bottom: 16px;">
              </div>
              <div class="messaging-btn-wrapper">
                <span class="messaging-btn action">Save</span>
              </div>
            </div>
            <div v-if="selected==='Calling'" class="calling">
              <span class="settings-body-title">Calling</span>
              <div class="radio-input action" @click="usevoicemail = !usevoicemail">
                <span class="custom-radio">
                  <span :style="{display: usevoicemail ? 'block' : 'none'}"></span>
                </span>
                <div class="radio-input-text">
                  <span class="radio-input-text-title">Use voicemail</span>
                  <span class="radio-input-text-subtitle">Send missed calls to voicemail</span>
                </div>
              </div>
              <div class="radio-input">
                <div class="radio-input-text">
                  <span class="radio-input-text-title">Blocked numbers</span>
                  <span class="radio-input-text-subtitle">There are no blocked numbers</span>
                </div>
              </div>
            </div>
            <div v-if="selected==='Security & Login'" class="securityandlogin">
              <span class="settings-body-title" style="margin-bottom: 10px;">Security & Login</span>
              <div class="securitylogin-alldevice">
                <span>Recent activity</span>
                <span class="action action-title">Log out of all device</span>
              </div>
              <div class="securitylogin-activity">
                <div class="securitylogin-activity-leftpart">
                  <span>Windows - Chrome Dev</span>
                  <span class="action action-title">Today at 8:30 AM</span>
                </div>
                <span class="action action-title">Log out</span>
              </div>
              <div class="securitylogin-activity">
                <div class="securitylogin-activity-leftpart">
                  <span>Windows -</span>
                  <span class="action action-title">Active now</span>
                </div>
              </div>
            </div>
            <div v-if="selected==='Legal and Privacy'" class="legalandprivacy">
              <span class="settings-body-title">Legal and Privacy</span>
              <span class="legalandprivacy-items action">Privacy Policy</span>
              <span class="legalandprivacy-items action">"Terms & Conditions" for free SIM</span>
              <!-- <span class="legalandprivacy-items action">"2G Fair Use Policy" for free SIM</span> -->
            </div>
          </div>
        </div>
        <span class="settings-close action" @click="onClose">
          <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30.2724" height="2.25991" rx="0.5" transform="matrix(0.696414 0.71764 -0.716409 0.697681 1.61914 0)" fill="black"/>
            <rect width="30.2717" height="2.25997" rx="0.5" transform="matrix(0.706482 -0.707731 0.706482 0.707731 0 21.4248)" fill="black"/>
          </svg>
        </span>
      </div>
    </template>
  </desktop-layout>
</template>

<script>
import DesktopLayout from '../components/Layout/DesktopLayout.vue'
export default {
  name: 'Settings',
  components: {
    DesktopLayout,
  },
  data() {
    return {
      settings: [
        'Account',
        'Password',
        'Notification',
        'Messaging',
        'Calling',
        'Security & Login',
        'Legal and Privacy'
      ],
      selected: 'Account',
      notificationsound: true,
      allsound: true,
      desktop: true,
      email: false,
      usevoicemail: true,
    }
  },
  methods: {
    onClose() {
      this.$router.push('./chatting')
    }
  }
}
</script>
<style lang="scss" scoped>
div.settings {
  display: flex;
  width: 100%;
  height: calc(100vh - 55px);
  justify-content: space-between;
  position: relative;
  div.settings-leftpart {
    background-color: #F4F4F4;
    max-width: 415px;
    width: 100%;
    padding-top: 146px;
    div.settings-lists {
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 160px;
      width: 100%;
      span.settings-title {
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 15px;
      }
      span.settings-list {
       font-size: 20px;
       color: #9C9C9C;
       margin-bottom: 15px;
      }
      span.settings-list-active {
       font-size: 20px;
       color: #FF7777;
       margin-bottom: 15px;
      }
    }
  }
  div.settings-rightpart {
    width: 100%;
    padding: 146px 10px 10px 135px;
    overflow-y: auto;
    span.settings-body-title {
      display: block;
      font-size: 30px;
      margin-bottom: 40px;
      font-weight: 500;
    }
    div.text-input {
      display: flex;
      flex-direction: column;
      margin-bottom: 35px;
      span.label {
        font-size: 14px;
        color: #9C9C9C;
        margin-bottom: 5px;
      }
      input {
        outline: none;
        border: none;
        border-bottom: 1px solid #C7C5C5;
        max-width: 480px;
        width: 100%;
        padding-bottom: 12px;
        font-size: 14px;
      }
      ::placeholder {
        color: #9C9C9C;
        font-size: 14px;
      }
    }
    div.messaging-btn-wrapper {
      max-width: 480px;
      display: flex;
      justify-content: flex-end;
      span.cancel-btn {
        max-width: 113px;
        width: 100%;
        height: 32px;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #000000;
      }
      span.messaging-btn {
        max-width: 113px;
        width: 100%;
        height: 32px;
        background-color: #FF7777;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 8px;
      }
    }
    div.radio-input {
      display: flex;
      align-items: center;
      margin-bottom: 35px;
      span.custom-radio {
        width: 24px;
        height: 24px;
        min-width: 24px;
        border: 2px solid #FF7777;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin-right: 15px;
        span {
          width: 14px;
          height: 14px;
          min-width: 14px;
          background-color: #FF7777;
          border-radius: 100%;
        }
      }
      div.radio-input-text {
        display: flex;
        flex-direction: column;
        span.radio-input-text-title {
          font-size: 18px;
          color: #616161;
        }
        span.radio-input-text-subtitle {
          font-size: 14px;
          color: #9C9C9C;
        }
      }
    }
    div.securityandlogin {
      max-width: 483px;
      width: 100%;
      div.securitylogin-alldevice {
        margin-bottom: 60px;
        display: flex;
        justify-content: space-between;
      }
    }
    div.securitylogin-activity {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid #C7C5C5;
      max-width: 483px;
      width: 100%;
      margin-bottom: 40px;
      div.securitylogin-activity-leftpart {
        span:first-child {
          display: block;
          font-size: 16px;
          margin-bottom: 5px;
        }
        span:last-child {
          display: block;
          font-size: 14px;
          color:#9C9C9C;
        }
      }
    }
    div.legalandprivacy {
      span.legalandprivacy-items {
        display: block;
        font-size: 20px;
        color: #FF0000;
        margin-bottom: 30px;
      }
    }
  }
  span.settings-close {
    position: absolute;
    top: 60px;
    right: 41px;
  }
}
@media only screen and (max-width: 768px) {
    div.settings {
      flex-wrap: wrap;
      div.settings-leftpart {
        max-width: unset;
        height: 100vh;
      }
      div.settings-rightpart {
        position: relative;
        display: flex;
        padding: 20px;
        justify-content: center;
        align-items: center;
        height: 100vh;
        div.settings-body {
          width: 100%;
        }
      }
    }
}
</style>