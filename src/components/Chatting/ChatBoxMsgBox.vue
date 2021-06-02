<template>
  <div class="msgbox">
    <template v-for="(message, index) in messages" :key="index">
      <div v-if="index === 0 || (index > 0 && messages[index-1].day !== message.day)" class="msgbox-day">
        <span>{{message.day}}</span>
      </div>
      <div :class="message.received ? {'message received': true} : {'message sent': true}">
        <div class="msg-box">
          <div v-if="message.type === 'text'" class="msg-text">
            <span>{{message.text}}</span>
          </div>
          <div v-if="message.type === 'voice'" class="msg-voice">
            <span class="play-btn action">
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.1212V0L14 8.06061L0 16.1212Z" fill="white"/>
              </svg>
            </span>
            <div class="msg-voice-right">
              <span class="icon">
                <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="28" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="68" y="7" width="2" height="15" rx="1" fill="#CBCBCB"/>
                  <rect x="32" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="72" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="76" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="80" width="2" height="22" rx="1" fill="#CBCBCB"/>
                  <rect x="36" y="6" width="2" height="16" rx="1" fill="#CBCBCB"/>
                  <rect x="84" y="6" width="2" height="16" rx="1" fill="#CBCBCB"/>
                  <rect x="40" y="11" width="2" height="11" rx="1" fill="#CBCBCB"/>
                  <rect x="44" y="15" width="2" height="7" rx="1" fill="#CBCBCB"/>
                  <rect x="60" y="14" width="2" height="8" rx="1" fill="#CBCBCB"/>
                  <rect x="24" y="12" width="2" height="10" rx="1" fill="#CBCBCB"/>
                  <rect x="64" y="11" width="2" height="11" rx="1" fill="#CBCBCB"/>
                  <rect x="16" y="16" width="2" height="6" rx="1" fill="#CBCBCB"/>
                  <rect x="56" y="16" width="2" height="6" rx="1" fill="#CBCBCB"/>
                  <rect x="12" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="100" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="8" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="96" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="4" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="92" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="52" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="88" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                  <rect x="48" y="20" width="2" height="2" rx="1" fill="#CBCBCB"/>
                </svg>
              </span>
              <span class="duration">{{message.duration}}</span>
            </div>
          </div>
        </div>
        <span class="status">
          <span class="time">{{message.time}}</span>
          <span v-if="message.checked1">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0H10.4323L2.98065 5.90806L0.503199 4.45323H0L2.98065 9.29677L11 0Z" fill="#00DE5E"/>
            </svg>
          </span>
          <span v-if="message.checked2">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0H10.4323L2.98065 5.90806L0.503199 4.45323H0L2.98065 9.29677L11 0Z" fill="#00DE5E"/>
            </svg>
          </span>
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
      messages: [
        {
          type: 'text',
          text: 'Hi, how are you? Miss you! When will you come?',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:37',
          day: 'Yesterday'
        },
        {
          type: 'text',
          text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
          checked1: true,
          checked2: true,
          received: false,
          time: '12:37',
          day: 'Yesterday'
        },
        {
          type: 'voice',
          duration: '00:37',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:51',
          day: 'Yesterday'
        },
        {
          type: 'text',
          text: 'Then let\'s go together if you succeed!',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:52',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'Hi, how are you? Miss you! When will you come?',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:37',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
          checked1: true,
          checked2: true,
          received: false,
          time: '12:37',
          day: 'Today'
        },
        {
          type: 'voice',
          duration: '00:37',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:51',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'Then let\'s go together if you succeed!',
          checked1: true,
          checked2: true,
          received: true,
          time: '12:52',
          day: 'Today'
        },
      ],
      action: '',
    }
  }
}
</script>
<style lang="scss" scoped>
div.msgbox {
  position: relative;
  height: calc(100% - 70px);
  overflow-y: auto;
  padding: 18px 40px;
  div.msgbox-day {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 28px;
    span {
      font-weight: 500;
      font-size: 14px;
      color: #B7B7B7;
    }
  }
  div.message {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;
    div.msg-box {
      max-width: 310px;
      padding: 20px 20px 20px 35px;
      border-radius: 26px;
      position: relative;
      display: inline;
      div.msg-text {
        span {
          font-size: 15px;
          color: #4F4F4F;
        }
      }
      div.msg-voice {
        display: flex;
        span.play-btn {
          min-width: 45px;
          width: 45px;
          height: 45px;
          border-radius: 100%;
          background-color: #FF3232;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
        }
        div.msg-voice-right {
          display: flex;
          flex-direction: column;
          span.duration {
            margin-top: 5px;
            color: #9E9E9E;
            font-size: 12px;
          }
        }
      }
    }
    span.status {
      margin: 7px 0;
      span.time {
        color: #B7B7B7;
        font-size: 12px;
        margin-right: 3px;
      }

    }
  }
  div.received {
    align-items: flex-start;
    div.msg-box {
      background-color: #EBEBEB;
      border-top-left-radius: 0px;
    }
    div.msg-box::after {
    background-color: white;
    border-radius: 0 100% 50% 0;
    border-right: 0;
    top: 3px;
    content: "";
    height: 137px;
    margin-top: -5px;
    margin-right: -8px;
    position: absolute;
    left: -11px;
    transform: rotate(
-10deg
);
    width: 30px;
    z-index: -1;
    }
    div.msg-box::before {
      background-color: #EBEBEB;
      border-radius: 0;
      border-right: 0;
      top: 5.2px;
      content: '';
      height: 30px;
      margin-top: -5px;
      margin-right: -5px;
      position: absolute;
      left: -11px;
      width: 30px;
      z-index: -1;
    }
  }
  div.sent {
    align-items: flex-end;
    div.msg-box {
      background-color: #D6FFD6;
      border-top-right-radius: 0px;
    }
    div.msg-box::after {
      background-color: white;
      border-radius: 100% 0 50% 0;
      border-right: 0;
      top: -5px;
      content: "";
      height: 137px;
      margin-top: -5px;
      margin-right: -8px;
      position: absolute;
      right: -5px;
      transform: rotate(10deg);
      width: 30px;
      z-index: -1;
    }
    div.msg-box::before {
      background-color: #D6FFD6;
      border-radius: 0;
      border-right: 0;
      top: 5.2px;
      content: '';
      height: 30px;
      margin-top: -5px;
      margin-right: -5px;
      position: absolute;
      right: -11px;
      width: 30px;
      z-index: -1;
    }
  }
}
@media screen and (max-width: 900px) {
    div.msgbox {
    height: calc(100% - 168px);
  }
}
</style>