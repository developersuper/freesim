<template>
  <div class="chatboxheader">
    <template v-if="chatter === null">
      <div class="self-user">
        <img :src="user.avatar" alt="" class="avatar">
        <div class="self-user-info">
          <span class="title">{{user.name}}</span>
          <span class="phone-num">{{user.phone}}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="client-info">
        <img :src="chatter.avatar" alt="" class="avatar">
        <span class="title">{{chatter.name}}</span>
      </div>
      <search-bar class="search-bar" :value="chatSearch" @value="setChatSearch"/>
      <chat-box-header-settings-bar class="settings-bar"/>
    </template>
    <span class="back-btn action">
      Back
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchBar from './elements/SearchBar'
import ChatBoxHeaderSettingsBar from './ChatBoxHeaderSettingsBar'

export default {
  name: 'ChatBoxHeader',
  components: {
    SearchBar,
    ChatBoxHeaderSettingsBar,
  },
  data() {
    return {
    }
  },
  computed: {
    chatter() {
      if(this.$store.getters.activechatter === -1) return null
      return this.$store.getters.chats[this.$store.getters.activechatter]
    },
    ...mapGetters(['user', 'chatSearch']),
  },
  methods: {
    setChatSearch(value) {
      this.$store.commit('setChatSearch', value)
    }
  }
}
</script>
<style lang="scss" scoped>
div.chatboxheader {
  width: 100%;
  border-bottom: 1px solid #C1C1C1;
  min-height: 70px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div.self-user {
    display: flex;
    align-items: center;
    margin-left: 30px; 
  }
  img.avatar {
    width: 54px;
    height: 54px;
    border-radius: 100%;
  }
  div.self-user-info {
   margin-left: 18px;
   span {
     display: block;
   } 
  }
  span.title {
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
  }
  span.phone-num {
    font-weight: normal;
    font-size: 15px;
  }
  div.client-info {
    display: flex;
    align-items: center;
    margin: auto 24px;
    span.title {
      margin-left: 18px;
    }
  }
}
@media screen and (max-width: 900px) {
  div.chatboxheader {
    flex-wrap: wrap;
    height: 111px;
    padding-top: 14px;
    padding-bottom: 0;
    position: relative;
    div.client-info {
      width: 100%;
    }
    .search-bar {
      max-width: 140px;
      width: 100%;
      margin-left: 24px;
      margin-top: 2px;
      justify-content: flex-start !important;
    }
    .settings-bar {
      margin-left: 5px;
    }
  }
  @media only screen and (max-width: 733px) {
    div.self-user {
      margin-left: 10px !important;
    }
  }
}
</style>