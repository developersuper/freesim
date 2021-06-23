<template>
  <modals></modals>
  <div class="main-layout" @contextmenu.prevent="">
    <sidebar/>
    <div class="main-box">
      <left-box v-if="viewport === 'desktop' || (viewport === 'mobile' && window === 'leftbox')" />
      <chat-box v-if="viewport === 'desktop' || (viewport === 'mobile' && window === 'rightbox')"/>
    </div>
    <div class="adv-box">
    </div>
  </div> 
</template>

<script>
import {mapGetters} from 'vuex'

import LeftBox from '@/components/Chatting/LeftBox.vue'
import ChatBox from '@/components/Chatting/ChatBox.vue'
import Modals from '@/components/Chatting/Modals.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'

export default {
  name: 'MainLayout',
  components: {
    LeftBox,
    ChatBox,
    Modals,
    Sidebar,
  },
  computed: {
    ...mapGetters([
      'user',
      'viewport',
      'window',
    ])
  },
}
</script>

<style lang="scss" scoped>
div.main-layout {
  position: relative;
  display: flex;
  width: 100%;
  // height: calc(100vh - 55px);
  height: calc(var(--vh, 1vh) * 100 - 55px);
  -webkit-height: calc(var(--vh, 1vh) * 100 - 55px);
  padding-left: 70px;
  // padding-right: 286px;
  div.main-box {
    width: 100%;
    display: flex;
    // flex-wrap: wrap;
  }
  div.adv-box {
    display: none;
    max-width: 286px;
    width: 100%;
  }
}
@media screen and (max-width: 733px) {
 div.main-layout {
   width: 100%;
   div.main-box {
     width: 100%;
     flex-wrap: wrap;
   }
 } 
}
</style>