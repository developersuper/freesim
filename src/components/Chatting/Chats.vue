<template>
  <div class="chats">
    <template v-for="(chat, index) in chats" :key="index">
      <div class="chat action">
        <div class="left">
          <img :src="chat.avatar" alt="">
          <div class="nameandmessage">
            <span class="name">
              {{chat.name}}
              <span v-if="chat.message.status === 'unread'" class="readstatus"></span>
            </span>
            <span class="message" :style="{color: chat.message.status === 'unread' ? '#333333' : '#8A8A8A'}">
              {{chat.message.text}}
            </span>
        </div>
        </div>
        <div class="status">
          <span class="top">
            <span v-if="chat.message.check1" class="check1">
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.6875 0H9.1875L2.625 5.20312L0.443158 3.92188H0L2.625 8.1875L9.6875 0Z" fill="#05FF00"/>
              </svg>
            </span>
            <span v-if="chat.message.check2" class="check2">
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.6875 0H9.1875L2.625 5.20312L0.443158 3.92188H0L2.625 8.1875L9.6875 0Z" fill="#05FF00"/>
              </svg>
            </span>
            <span class="time">{{chat.message.time}}</span>
          </span>
          <span v-if="chat.message.day !== 'Today'" class="bottom">
            {{chat.message.day}}
          </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Chats',
  components: {
  },
  data() {
    return {
      chats: [
        {
          name: 'Jane Fisher',
          avatar: require('@/assets/images/user.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: false,
            time: '22.06',
            day: 'Today'
          }
        },
        {
          name: 'Adam Brogy',
          avatar: require('@/assets/images/avatars/adam.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '01.12',
            day: 'Today'
          }
        },
        {
          name: 'Luisa Simpson',
          avatar: require('@/assets/images/avatars/luisa.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '22.06',
            day: 'Today'
          }
        },
        {
          name: 'Martin Davids',
          avatar: require('@/assets/images/avatars/martin.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: true,
            check2: true,
            time: '22.06',
            day: 'Yesterday'
          }
        },
        {
          name: 'Stive Amstrong',
          avatar: require('@/assets/images/avatars/stive.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '22.06',
            day: 'Yesterday'
          }
        },
        {
          name: 'Jane Fisher',
          avatar: require('@/assets/images/user.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: false,
            time: '22.06',
            day: 'Today'
          }
        },
        {
          name: 'Adam Brogy',
          avatar: require('@/assets/images/avatars/adam.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '01.12',
            day: 'Today'
          }
        },
        {
          name: 'Luisa Simpson',
          avatar: require('@/assets/images/avatars/luisa.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '22.06',
            day: 'Today'
          }
        },
        {
          name: 'Martin Davids',
          avatar: require('@/assets/images/avatars/martin.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: true,
            check2: true,
            time: '22.06',
            day: 'Yesterday'
          }
        },
        {
          name: 'Stive Amstrong',
          avatar: require('@/assets/images/avatars/stive.png'),
          message: {
            text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
            status: 'read',
            check1: false,
            check2: true,
            time: '22.06',
            day: 'Yesterday'
          }
        },
      ],
    }
  },
  mounted() {
    console.log(require('@/assets/images/user.png'))
  }
}
</script>
<style lang="scss" scoped>
div.chats {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 115px);
  overflow-y: auto;
  div.chat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    padding: 13px 19px 13px 22px;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 54px;
        height: 54px;
        margin-right: 20px;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
      }
      div.nameandmessage {
        max-width: 189px;
        width: 100%;
        span {
          display: block;
          text-overflow: ellipsis;
          line-height: 1;
        }
        span.name {
          position: relative;
          font-size: 16px;
          font-weight: 500;
          white-space: nowrap;
          width: fit-content;
          padding-right: 15px;
          margin-bottom: 5px;
          span.readstatus {
            position: absolute;
            background-color: #FE3030;
            width: 8px;
            height: 8px;
            top: 0px;
            right: 0px;
            border-radius: 100%;
          }
        }
        span.message {
          font-weight: 500;
          font-size: 13px;
          line-height: 15px;
          color: #8A8A8A;
          width: 100%;
          height: 29px;
          display: block;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        } 
      }
    }
    div.status {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 55px;
      width: 100%;
      span.top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span.time {
          font-size: 10px;
          font-weight: 500;
          color: #B7B7B7;
          margin-left: 4.5px;
        }
      }
      span.bottom {
        font-size: 10px;
        font-weight: 500;
        color: #B7B7B7;
        text-align: right;
      }
    }
  }
}
</style>