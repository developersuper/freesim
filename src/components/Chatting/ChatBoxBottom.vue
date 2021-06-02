<template>
  <div class="chatboxbottom">
    <template v-if="mode === 'message'">
      <div class="chatboxbottom-msg-left">
        <span class="icon action">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.375 0C4.20547 0 0 4.20547 0 9.375C0 14.5445 4.20547 18.75 9.375 18.75C14.5445 18.75 18.75 14.5445 18.75 9.375C18.75 4.20547 14.5445 0 9.375 0ZM9.375 1.5625C13.6992 1.5625 17.1875 5.05078 17.1875 9.375C17.1875 13.6992 13.6992 17.1875 9.375 17.1875C5.05078 17.1875 1.5625 13.6992 1.5625 9.375C1.5625 5.05078 5.05078 1.5625 9.375 1.5625ZM5.85938 6.25C5.54857 6.25 5.2505 6.37347 5.03073 6.59323C4.81097 6.813 4.6875 7.11107 4.6875 7.42188C4.6875 7.73268 4.81097 8.03075 5.03073 8.25052C5.2505 8.47029 5.54857 8.59375 5.85938 8.59375C6.17018 8.59375 6.46825 8.47029 6.68802 8.25052C6.90778 8.03075 7.03125 7.73268 7.03125 7.42188C7.03125 7.11107 6.90778 6.813 6.68802 6.59323C6.46825 6.37347 6.17018 6.25 5.85938 6.25ZM12.8906 6.25C12.5798 6.25 12.2818 6.37347 12.062 6.59323C11.8422 6.813 11.7188 7.11107 11.7188 7.42188C11.7188 7.73268 11.8422 8.03075 12.062 8.25052C12.2818 8.47029 12.5798 8.59375 12.8906 8.59375C13.2014 8.59375 13.4995 8.47029 13.7193 8.25052C13.939 8.03075 14.0625 7.73268 14.0625 7.42188C14.0625 7.11107 13.939 6.813 13.7193 6.59323C13.4995 6.37347 13.2014 6.25 12.8906 6.25ZM5.32188 11.7188L3.97969 12.5C5.06016 14.3648 7.06797 15.625 9.375 15.625C11.682 15.625 13.6898 14.3648 14.7703 12.5L13.4281 11.7188C13.0187 12.4316 12.4282 13.0238 11.7165 13.4353C11.0048 13.8469 10.1971 14.0632 9.375 14.0625C8.55289 14.0632 7.74516 13.8469 7.03347 13.4353C6.32177 13.0238 5.73135 12.4316 5.32188 11.7188Z" fill="#9A9A9A"/>
          </svg>
        </span>
        <span class="icon action">
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5278 1.72485C13.228 -0.574951 9.48292 -0.574951 7.18556 1.72485L0.813499 8.09204C0.771995 8.13354 0.750023 8.1897 0.750023 8.24829C0.750023 8.30688 0.771995 8.36304 0.813499 8.40454L1.71438 9.30542C1.75556 9.34642 1.8113 9.36944 1.86941 9.36944C1.92751 9.36944 1.98326 9.34642 2.02444 9.30542L8.3965 2.93823C9.18752 2.14722 10.2398 1.71265 11.3579 1.71265C12.4761 1.71265 13.5283 2.14722 14.3169 2.93823C15.1079 3.72925 15.5425 4.78149 15.5425 5.89722C15.5425 7.01538 15.1079 8.06519 14.3169 8.8562L7.82277 15.3479L6.77052 16.4001C5.78664 17.384 4.18752 17.384 3.20363 16.4001C2.72756 15.9241 2.46633 15.2917 2.46633 14.6179C2.46633 13.9441 2.72756 13.3118 3.20363 12.8357L9.6465 6.39526C9.81007 6.23413 10.0249 6.1438 10.2544 6.1438H10.2569C10.4863 6.1438 10.6987 6.23413 10.8599 6.39526C11.0234 6.55884 11.1113 6.77368 11.1113 7.00317C11.1113 7.23022 11.021 7.44507 10.8599 7.6062L5.59377 12.8674C5.55226 12.9089 5.53029 12.9651 5.53029 13.0237C5.53029 13.0823 5.55226 13.1384 5.59377 13.1799L6.49465 14.0808C6.53582 14.1218 6.59157 14.1448 6.64968 14.1448C6.70778 14.1448 6.76353 14.1218 6.8047 14.0808L12.0684 8.81714C12.5542 8.3313 12.8203 7.68677 12.8203 7.00073C12.8203 6.3147 12.5518 5.66772 12.0684 5.18433C11.065 4.18091 9.4341 4.18335 8.43068 5.18433L7.80568 5.81177L1.99026 11.6248C1.59556 12.0171 1.28268 12.484 1.06979 12.9982C0.856888 13.5124 0.748199 14.0638 0.750023 14.6204C0.750023 15.7507 1.19192 16.8127 1.99026 17.6111C2.81789 18.4363 3.90188 18.8489 4.98586 18.8489C6.06984 18.8489 7.15383 18.4363 7.97902 17.6111L15.5278 10.0671C16.6387 8.95386 17.2539 7.47192 17.2539 5.89722C17.2564 4.32007 16.6411 2.83813 15.5278 1.72485Z" fill="#9A9A9A"/>
          </svg>
        </span>
        <input type="text" placeholder="Message" class="msg" v-model="message">
      </div>
      <span :class="message === '' ? {'action': true} : {'send-icon action': true}">
        <svg v-if="message === ''" @click="mode = 'voice'" width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.75 4.40001C9.75 2.52224 8.183 1 6.25 1C4.317 1 2.75 2.52224 2.75 4.40001V8.65003C2.75 10.5278 4.317 12.05 6.25 12.05C8.183 12.05 9.75 10.5278 9.75 8.65003V4.40001Z" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.5 13.1482C10.8438 13.8725 10.036 14.4525 9.13071 14.8495C8.22537 15.2464 7.24328 15.4511 6.25 15.45C5.25672 15.4511 4.27463 15.2464 3.36929 14.8495C2.46395 14.4525 1.65621 13.8725 1 13.1482" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.25 15.45V18" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.5 18H8" stroke="#9A9A9A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="message !== ''" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.4012 0.563709L20.5949 10.0212C20.6996 10.0728 20.7878 10.1526 20.8494 10.2517C20.911 10.3508 20.9437 10.4651 20.9437 10.5818C20.9437 10.6985 20.911 10.8129 20.8494 10.912C20.7878 11.011 20.6996 11.0909 20.5949 11.1425L1.39995 20.6C1.29241 20.6528 1.17196 20.6736 1.05294 20.6599C0.933912 20.6462 0.821332 20.5986 0.728604 20.5227C0.635876 20.4468 0.566909 20.3459 0.529916 20.232C0.492923 20.118 0.489463 19.9958 0.519949 19.88L2.9812 10.5875L0.518699 1.28496C0.487709 1.16885 0.490847 1.04627 0.52774 0.931904C0.564633 0.817536 0.633714 0.716229 0.72671 0.640117C0.819706 0.564006 0.932672 0.516318 1.05208 0.502767C1.17148 0.489215 1.29226 0.510374 1.39995 0.563709H1.4012ZM2.07995 2.29246L4.09245 9.89496L4.16995 9.87996L4.24995 9.87496H12.9999C13.1561 9.87467 13.3068 9.93287 13.4222 10.0381C13.5376 10.1433 13.6094 10.2879 13.6235 10.4435C13.6377 10.599 13.593 10.7542 13.4984 10.8785C13.4038 11.0028 13.2661 11.0871 13.1124 11.115L12.9999 11.125H4.24995C4.21139 11.1251 4.1729 11.1218 4.13495 11.115L2.0812 18.8725L18.9037 10.5825L2.07995 2.29246Z" fill="white"/>
        </svg>
      </span>
    </template>
    <template v-if="mode === 'voice'">
      <span class="text">Records a voice message</span>
      <div class="voicemsg-left">
        <span class="recorded">
          <span class="close action" @click="mode = 'message'">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.1998 0.800049L0.799805 7.20005M7.1998 7.20005L0.799805 0.800049L7.1998 7.20005Z" stroke="black" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="alarm"></span>
          <span class="time">00:02</span>
          <span class="status">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.2002 4.40005L4.8002 8.00005L10.8002 0.800049" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </span>
        <span class="microphone action">
          <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 4.40001C9.75 2.52224 8.183 1 6.25 1C4.317 1 2.75 2.52224 2.75 4.40001V8.65003C2.75 10.5278 4.317 12.05 6.25 12.05C8.183 12.05 9.75 10.5278 9.75 8.65003V4.40001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5 13.1482C10.8438 13.8725 10.036 14.4525 9.13071 14.8495C8.22537 15.2464 7.24328 15.4511 6.25 15.45C5.25672 15.4511 4.27463 15.2464 3.36929 14.8495C2.46395 14.4525 1.65621 13.8725 1 13.1482" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.25 15.45V18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 18H8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
    </template>
    <template v-if="mode === 'select'">
      <div class="select-left">
        <span>2 selected</span>
        <span class="select-close action">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83366 1.16675L1.16699 5.83341M5.83366 5.83341L1.16699 1.16675L5.83366 5.83341Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="select-right">
        <span class="action" @click="mode = 'message'">
          <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2716 4.17519V0L3.68082 4.54081L0 8.18156L3.74616 11.2695L8.2716 15V10.9145C16.2165 10.3222 19 14.8698 19 14.8698C19 12.0365 18.764 9.09608 16.512 6.86957C13.8943 4.27938 10.1032 4.09608 8.2716 4.17519Z" fill="#FF7777"/>
          </svg>
        </span>
        <span class="action">
          <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2857 20V21.7857C14.2857 22.3775 13.806 22.8571 13.2143 22.8571H1.07143C0.479688 22.8571 0 22.3775 0 21.7857V5.35714C0 4.7654 0.479688 4.28571 1.07143 4.28571H4.28571V17.5C4.28571 18.8785 5.40719 20 6.78571 20H14.2857ZM14.2857 4.64286V0H6.78571C6.19397 0 5.71429 0.479688 5.71429 1.07143V17.5C5.71429 18.0917 6.19397 18.5714 6.78571 18.5714H18.9286C19.5203 18.5714 20 18.0917 20 17.5V5.71429H15.3571C14.7679 5.71429 14.2857 5.23214 14.2857 4.64286ZM19.6862 3.25763L16.7424 0.313795C16.5414 0.112876 16.2689 1.4857e-06 15.9848 0L15.7143 0V4.28571H20V4.01522C20 3.73107 19.8871 3.45856 19.6862 3.25763Z" fill="#FF7777"/>
          </svg>
        </span>
        <span class="action">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0806 4.5C19.0806 4.74493 18.9903 4.98134 18.8268 5.16437C18.6634 5.34741 18.4382 5.46434 18.1939 5.493L18.0764 5.5H17.2278L15.9916 18.02C15.9243 18.6994 15.6056 19.3295 15.0976 19.7879C14.5896 20.2462 13.9285 20.5001 13.243 20.5H5.83767C5.15212 20.5001 4.49105 20.2462 3.98303 19.7879C3.47501 19.3295 3.15636 18.6994 3.08905 18.02L1.85283 5.5H1.00424C0.737901 5.5 0.482468 5.39464 0.294136 5.20711C0.105804 5.01957 0 4.76522 0 4.5C0 4.23478 0.105804 3.98043 0.294136 3.79289C0.482468 3.60536 0.737901 3.5 1.00424 3.5H6.02546C6.02546 3.04037 6.11637 2.58525 6.29301 2.16061C6.46965 1.73597 6.72855 1.35013 7.05494 1.02513C7.38132 0.700121 7.76879 0.442313 8.19524 0.266422C8.62168 0.0905302 9.07873 0 9.54031 0C10.0019 0 10.4589 0.0905302 10.8854 0.266422C11.3118 0.442313 11.6993 0.700121 12.0257 1.02513C12.3521 1.35013 12.611 1.73597 12.7876 2.16061C12.9642 2.58525 13.0552 3.04037 13.0552 3.5H18.0764C18.3427 3.5 18.5982 3.60536 18.7865 3.79289C18.9748 3.98043 19.0806 4.23478 19.0806 4.5ZM11.7999 7.75C11.6179 7.75001 11.442 7.81564 11.3048 7.93477C11.1677 8.05389 11.0785 8.21845 11.0537 8.398L11.0467 8.5V15.5L11.0537 15.602C11.0785 15.7815 11.1677 15.946 11.3049 16.0651C11.4421 16.1842 11.6179 16.2498 11.7999 16.2498C11.9818 16.2498 12.1576 16.1842 12.2948 16.0651C12.432 15.946 12.5212 15.7815 12.546 15.602L12.553 15.5V8.5L12.546 8.398C12.5213 8.21845 12.432 8.05389 12.2949 7.93477C12.1577 7.81564 11.9819 7.75001 11.7999 7.75ZM7.28076 7.75C7.09876 7.75001 6.92291 7.81564 6.78574 7.93477C6.64857 8.05389 6.55936 8.21845 6.53461 8.398L6.52758 8.5V15.5L6.53461 15.602C6.55941 15.7815 6.64865 15.946 6.78581 16.0651C6.92297 16.1842 7.09879 16.2498 7.28076 16.2498C7.46274 16.2498 7.63855 16.1842 7.77572 16.0651C7.91288 15.946 8.00211 15.7815 8.02692 15.602L8.03395 15.5V8.5L8.02692 8.398C8.00216 8.21845 7.91295 8.05389 7.77579 7.93477C7.63862 7.81564 7.46277 7.75001 7.28076 7.75ZM9.54031 2C9.1408 2 8.75765 2.15804 8.47515 2.43934C8.19265 2.72064 8.03395 3.10218 8.03395 3.5H11.0467C11.0467 3.10218 10.888 2.72064 10.6055 2.43934C10.323 2.15804 9.93982 2 9.54031 2Z" fill="#FF7777"/>
          </svg>
        </span>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ChatBoxMsgBox',
  components: {
  },
  data() {
    return {
      mode: 'message',
      message: '',
    }
  },
  mounted() {
    console.log(this.mode === 'message')
  }
}
</script>
<style lang="scss" scoped>
div.chatboxbottom {
  height: 57px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #C1C1C1;
  padding: 5px 30px;
  font-size: 14px;
  div.chatboxbottom-msg-left {
    display: flex;
    align-items: center;
    max-width: 500px;
    width: 100%;
    margin-right: 20px;
    span.icon {
      margin-right: 20px;
    }
    input.msg {
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      max-width: 500px;
      width: 100%;
    }
    ::placeholder {
      color: #9C9C9C;
    }
  }
  span.send-icon {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 100%;
    background-color: #00DE5E;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span.text {
    font-size: 14px;
    color: #9C9C9C;
  }
  div.voicemsg-left {
    display: flex;
    align-items: center;
    span.recorded {
      display: flex;
      align-items: center;
      margin-right: 30px;
      span.close {
        min-width: 16px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        border: 1px solid #C4C4C4;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 21px;
      }
      span.alarm {
        min-width: 6px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #ff7777;
        margin-right: 3px;
      }
      span.time {
        font-size: 16px;
        color: #9C9C9C;
        margin-right: 10px;
      }
      span.status {
        min-width: 16px;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background-color: #00DE5E;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    span.microphone {
      min-width: 38px;
      width: 38px;
      height: 38px;
      border-radius: 100%;
      background-color: #FF7777;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.select-left {
    display: flex;
    align-items: center;
    span.select-close {
      margin-left: 11px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  div.select-right {
    display: flex;
    align-items: center;
    max-width: 120px;
    width: 100%;
    justify-content: space-between;
  }
}
</style>