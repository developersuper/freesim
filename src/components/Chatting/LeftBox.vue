<template>
  <div class="left-box">
      <left-bar 
        :mode="mode" 
        :voicemail="4" 
        @onMode="setMode"
      />
    <search-bar         
      :ranges="chats.map(chat => {
        return {
          name: chat.name,
          avatar: chat.avatar
        }
      })"
      :value="searchValue"
      @value="setSearchValue"
    />
    <chats />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters(['mode', 'chats'])
  },
  methods: {
    setMode(mode) {
      this.$store.commit('setMode', mode)
    },
    setSearchValue($event) {
      this.searchValue = $event
    }
  }
}
</script>

<style lang="scss" scoped>
  div.left-box {
    max-width: 375px;
    width: 100%;
    border-top: 1px solid #C1C1C1;
    border-right: 1px solid #C1C1C1;
  }
  @media screen and (max-width: 733px) {
    div.left-box {
      max-width: unset;
      width: 100%;
    }
  }
</style>