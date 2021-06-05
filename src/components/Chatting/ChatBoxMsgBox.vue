<template>
  <context-menu :display="true" ref="msgMenu">
    <ul class="contextmenu">
      <li @click="contextAction($event, 'reply')"> Reply </li>
      <li @click="contextAction($event, 'copy')"> Copy </li>
      <li @click="contextAction($event, 'select')"> Select </li>
      <li @click="contextAction($event, 'info')"> Info </li>
      <li @click="contextAction($event, 'showinfolder')"> Show in Folder </li>
      <hr class="solid">
      <li @click="contextAction($event, 'delete')"> Delete </li>
    </ul>
  </context-menu>
  <context-menu :display="true" ref="msgBoxMenu">
    <ul class="contextmenu">
      <li @click="contextAction($event, 'select')"> Select </li>
      <hr class="solid">
      <li @click="contextAction($event, 'clear')"> Clear all</li>
    </ul>
  </context-menu>
  <div class="msgbox" @contextmenu="openMsgBoxMenu">
    <template v-for="(message, index) in messages" :key="index">
      <div v-if="index === 0 || (index > 0 && messages[index-1].day !== message.day)" class="msgbox-day">
        <span>{{message.day}}</span>
      </div>
      <div class="message" >
        <div class="message-upper">
          <span v-if="action === 'select'" @click="selectMsg(index)" :class="selected.has(index) ? {'select-check-active action': true} : {'select-check action': true}"></span>
          <div :class="message.received ? {'msg-box-wrapper received': true} : {'msg-box-wrapper sent': true}">
            <div class="msg-box" @contextmenu="openMsgMenu($event, index)">
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
          </div>
        </div>
        <div :class="message.received ? {'status received': true} : {'status sent': true}">
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
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import ContextMenu from './elements/ContextMenu'

export default {
  name: 'ChatBoxMsgBox',
  components: {
    ContextMenu,
  },
  computed: {
    ...mapGetters(['messages']),
  },
  data() {
    return {
      action: '',
      id: -1,
      selected: new Set(),
    }
  },
  methods: {
    openMsgMenu(e, id) {
      this.id = id;
      e.stopPropagation();
      e.preventDefault();
      this.$refs.msgMenu.open(e)
    },
    openMsgBoxMenu(e) {
      this.id = -1;     
      e.preventDefault();
      this.$refs.msgBoxMenu.open(e)
    },
    contextAction(e, action) {
      this.action = action;
      if(action === 'reply') {
        console.log(action)
        console.log(e, action, this.id)
      }
      if(action === 'copy') {
        console.log(action)
      }
      if(action === 'select') {
        this.selected.clear();
        if(this.id !== -1) this.selected.add(this.id)
        console.log(action, this.selected)
        this.id = -1;
        this.$refs.msgBoxMenu.close()
        this.$refs.msgMenu.close()
        return
      }
      if(action === 'info') {
        console.log(action)
      }
      if(action === 'showinfolder') {
        console.log(action)
      }
      if(action === 'delete') {
        console.log(action, this.id)
        this.messages = this.messages.filter((message, index) => index !== this.id)
      }
      if(action === 'clear') {
        this.messages = []
      }
      this.action = ''
      this.id = -1;
      this.$refs.msgBoxMenu.close()
      this.$refs.msgMenu.close()
    },
    selectMsg(id) {
      this.selected.has(id) ? this.selected.delete(id) : this.selected.add(id)
    }
  },
  mounted() {
    console.log(this.messages)
  }
}
</script>
<style lang="scss" scoped>
div.msgbox {
  position: relative;
  height: calc(100% - 70px);
  overflow-y: auto;
  padding: 18px 30px;
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
    div.message-upper {
      display: flex;
      align-items: center;
      span.select-check {
        min-width: 14px;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        border: 1px solid #C4C4C4;
        margin-right: 12px;
      }
      span.select-check-active{
        min-width: 14px;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        border: none;
        background-color:#FF7777;
        margin-right: 12px;
      }
      div.msg-box-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
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
      }
    }
    div.status {
      display: flex;
      span.status {
        margin: 7px 0;
        span.time {
          color: #B7B7B7;
          font-size: 12px;
          margin-right: 3px;
        }
  
      }
    }
  }
  div.received {
    justify-content: flex-start;
    div.msg-box {
      background-color: #EBEBEB;
      border-top-left-radius: 0px !important;
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
      transform: rotate(-10deg);
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
    justify-content: flex-end;
    div.msg-box {
      background-color: #D6FFD6;
      border-top-right-radius: 0px !important;
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