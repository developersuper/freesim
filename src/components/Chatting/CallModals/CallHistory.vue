<template>
  <div class="callhistory">
    <div class="tab-header">
      <span :class="tab === 'all' ? {'active action': true} : {'action': true}" @click="handleTab('all')">All</span>
      <span :class="tab === 'missed' ? {'active action': true} : {'action': true}" @click="handleTab('missed')">Missed</span>
    </div>
    <div class="tab-body">
      <template v-for="(history, index) in (tab === 'all' ? histories : histories.filter(item => item.type === 'Missed'))" :key="index">
        <call-history-item :item="history"></call-history-item>
      </template>
    </div>
    <div class="dial-icon action" @click="openDialPad">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#00DE5E"/>
        <circle cx="20.5" cy="19.5" r="3.5" fill="white"/>
        <circle cx="20.5" cy="27.5" r="3.5" fill="white"/>
        <circle cx="20.5" cy="35.5" r="3.5" fill="white"/>
        <circle cx="28.5" cy="19.5" r="3.5" fill="white"/>
        <circle cx="28.5" cy="27.5" r="3.5" fill="white"/>
        <circle cx="28.5" cy="35.5" r="3.5" fill="white"/>
        <circle cx="36.5" cy="19.5" r="3.5" fill="white"/>
        <circle cx="36.5" cy="27.5" r="3.5" fill="white"/>
        <circle cx="36.5" cy="35.5" r="3.5" fill="white"/>
      </svg>
      <svg class="dial-icon-second" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.5" cy="6.5" r="6.5" fill="#00DE5E"/>
      </svg>
    </div>
  </div>
</template>

<script>
import CallHistoryItem from '../CallHistoryItem'

export default {
  name: 'CallHistory',
  components: {
    CallHistoryItem,
  },
  data() {
    return {
      histories: [
        {
          type: 'Incoming',
          name: 'Jane Fisher',
          avatar: require('@/assets/images/user.png'),
          duration: '32 sec',
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
      tab: 'all',
    }
  },
  methods: {
    handleTab(tab) {
      this.tab = (tab === 'all' ? 'all' : 'missed')
    },
    openDialPad() {
      this.$store.commit('setModal', 'dialpad')
    }
  }
}
</script>

<style lang="scss" scoped>
div.callhistory {
  height: 496px;
  div.tab-header {
    widows: 100%;
    height: 50px;
    display: flex;
    align-items: stretch;
    padding: 0px 20px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      color: rgba(153, 153, 153, 0.7);
      margin-right: 14px;
    }
    span.active {
      color: rgba(255, 50, 50, 0.6);
      border-bottom: 1.5px solid rgba(255, 50, 50, 0.6);
    }
  }
  div.tab-body {
    height: 446px;
    padding-top: 10px;
    overflow-y: auto;
  }
  div.dial-icon {
    position:absolute;
    bottom: 20px;
    right: 20px;
    svg.dial-icon-second {
      position: absolute;
      top: 8px;
      right: 0px;
    }
  }
}
</style>