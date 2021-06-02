<template>
  <div class="left-box">
      <LeftBar 
        :mode="mode" 
        :voicemail="4" 
        @onMode="getMode"
      />
    <SearchBar />
    <Chats />
  </div>
</template>

<script>
import LeftBar from './LeftBar'
import Chats from './Chats'
import SearchBar from './elements/SearchBar'

export default {
  name: 'LeftBox',
  components: {
    LeftBar,
    Chats,
    SearchBar,
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
      min-width: 320px;
      width: 100%;
      border-top: 1px solid #C1C1C1;
      border-right: 1px solid #C1C1C1;
    }
</style>