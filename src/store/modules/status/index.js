import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  mode: 'chats',
  call: false,
  chats: [
    {
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
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
          status: 'unread',
          time: '12:37',
          day: 'Yesterday'
        },
        {
          type: 'voice',
          duration: '00:37',
          checked1: true,
          checked2: true,
          received: true,
          status: 'unread',
          time: '12:51',
          day: 'Yesterday'
        },
        {
          type: 'text',
          text: 'Then let\'s go together if you succeed!',
          checked1: true,
          checked2: true,
          received: true,
          status: 'unread',
          time: '12:52',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'Hi, how are you? Miss you! When will you come?',
          checked1: true,
          checked2: true,
          received: true,
          status: 'unread',
          time: '12:37',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
          checked1: true,
          checked2: true,
          received: false,
          status: 'unread',
          time: '12:37',
          day: 'Today'
        },
        {
          type: 'voice',
          duration: '00:37',
          checked1: true,
          checked2: true,
          received: true,
          status: 'unread',
          time: '12:51',
          day: 'Today'
        },
        {
          type: 'text',
          text: 'Then let\'s go together if you succeed!',
          checked1: true,
          checked2: true,
          received: true,
          status: 'unread',
          time: '12:52',
          day: 'Today'
        },
      ],
    },
    {
      name: 'Adam Brogy',
      avatar: require('@/assets/images/avatars/adam.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '01.12',
        day: 'Today'
      }]
    },
    {
      name: 'Luisa Simpson',
      avatar: require('@/assets/images/avatars/luisa.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '22.06',
        day: 'Today'
      }]
    },
    {
      name: 'Martin Davids',
      avatar: require('@/assets/images/avatars/martin.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: true,
        check2: true,
        time: '22.06',
        day: 'Yesterday'
      }]
    },
    {
      name: 'Stive Amstrong',
      avatar: require('@/assets/images/avatars/stive.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '22.06',
        day: 'Yesterday'
      }]
    },
    {
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: false,
        time: '22.06',
        day: 'Today'
      }]
    },
    {
      name: 'Adam Brogy',
      avatar: require('@/assets/images/avatars/adam.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '01.12',
        day: 'Today'
      }]
    },
    {
      name: 'Luisa Simpson',
      avatar: require('@/assets/images/avatars/luisa.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '22.06',
        day: 'Today'
      }]
    },
    {
      name: 'Martin Davids',
      avatar: require('@/assets/images/avatars/martin.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: true,
        check2: true,
        time: '22.06',
        day: 'Yesterday'
      }]
    },
    {
      name: 'Stive Amstrong',
      avatar: require('@/assets/images/avatars/stive.png'),
      messages: [{
        type: 'text',
        text: 'If we go to the market tomorrow, we need to see all the fruits that are sold there, I really love citrus fruits! I want to buy a lot and teach you to eat so that you would be healthy!',
        status: 'read',
        check1: false,
        check2: true,
        time: '22.06',
        day: 'Yesterday'
      }]
    },
  ],
  callHistories: [
    {
      type: 'Incoming',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '32 sec',
      time: '12:37',
      missedtime: 59,
      day: 'Today',

    },
    {
      type: 'Incoming',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '32 sec',
      time: '12:37',
      missedtime: 31,
      day: 'Today'
    },
    {
      type: 'Outgoing',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '56 sec',
      time: '12:37',
      day: 'Today'
    },
    {
      type: 'Missed',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '2 min',
      time: '12:37',
      day: 'Today'
    },
    {
      type: 'Incoming',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '32 sec',
      time: '12:37',
      day: 'Today'
    },
    {
      type: 'Outgoing',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '56 sec',
      time: '12:37',
      day: 'Today'
    },
    {
      type: 'Missed',
      name: 'Jane Fisher',
      avatar: require('@/assets/images/user.png'),
      duration: '2 min',
      time: '12:37',
      day: 'Today'
    },
  ],
  activechatter: 0,
  chatSearch: '',
  modal: '',
  contacts: [
    {
      name: 'Jane Fisher',
      fav: true,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'online'
    },
    {
      name: 'Adam Brogy',
      fav: true,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'online'
    },
    {
      name: 'Martin Davids',
      fav: false,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'was 22:11'
    },
    {
      name: 'Stiv Amstrong',
      fav: false,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'was 18:22'
    },
    {
      name: 'Jim Tomason',
      fav: false,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'was 18:20'
    },
    {
      name: 'Linda Gamson',
      fav: false,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'was 17:33'
    },
    {
      name: 'Lee Chau',
      fav: false,
      avatar: require('@/assets/images/user.png'),
      mobile: '0223122123',
      lastView: 'was 16:17'
    },
  ],
  viewport: 'desktop',
  window: 'rightbox',
}

export default {
  state,
  mutations,
  actions,
  getters
}