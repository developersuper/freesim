<template>
  <div class="chatboxheader">
    <template v-if="user === null">
      <div class="self-user">
        <img :src="require('@/assets/images/user.png')" alt="" class="avatar">
        <div class="self-user-info">
          <span class="title">Kim Jonson</span>
          <span class="phone-num">(601) 779-978</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="client-info">
        <img :src="require('@/assets/images/user.png')" alt="" class="avatar">
        <span class="title">Jane Fisher</span>
      </div>
      <SearchBar class="search-bar" />
      <ChatBoxHeadeSettingsBar class="settings-bar"/>
    </template>
  </div>
</template>

<script>
import SearchBar from './elements/SearchBar'
import ChatBoxHeadeSettingsBar from './ChatBoxHeadeSettingsBar'

export default {
  name: 'ChatBoxHeader',
  components: {
    SearchBar,
    ChatBoxHeadeSettingsBar,
  },
  data() {
    return {
      user: 1,
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
    padding-top: 14px;
    padding-bottom: 0;
    div.client-info {
      width: 100%;
    }
    .search-bar {
      order: 2;
      max-width: 140px;
      width: 100%;
      margin-left: 24px;
      margin-top: 2px;
      justify-content: flex-start !important;
    }
    .settings-bar {
      order: 3;
      margin-left: 5px;
    }
  }
}
</style>