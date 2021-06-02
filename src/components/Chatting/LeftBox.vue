<template>
  <div class="left-box">
      <LeftBar 
        :mode="mode" 
        :voicemail="4" 
        @onMode="getMode"
      />
    <div class="search">
      <div class="search-input">
        <img :src="require('@/assets/images/icons/search.png')" alt="">
        <input type="text" placeholder="Search" >
      </div>
    </div>
    <Chats />
  </div>
</template>

<script>
import LeftBar from './LeftBar'
import Chats from './Chats'

export default {
  name: 'LeftBox',
  components: {
    LeftBar,
    Chats,
  },
  data() {
    return {
      mode: 'chats',
    }
  },
  methods: {
    getMode(mode) {
      this.mode = mode;
    }
  }
}
</script>

<style lang="scss" scoped>
    div.left-box {
      max-width: 375px;
      min-width: 200px;
      width: 100%;
      border-top: 1px solid #C1C1C1;
      border-right: 1px solid #C1C1C1;
      div.search {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #C1C1C1;
        display: flex;
        justify-content: center;
        align-items: center;
        div.search-input {
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          padding: 6px 10px;
          border-radius: 12px;
          img {
            height: 11.85px;
            width: 12px;
            margin-right: 7px;
          }
          input {
            outline: none;
            border: none;
            font-size: 11px;
            background-color: #f0f0f0;
            width: 200px;
          }
          ::placeholder {
            color: #B0B0B0;
          }
        }
      }
    }
</style>