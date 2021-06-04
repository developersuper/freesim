<template>
  <calls></calls>
  <div class="main-layout" @contextmenu.prevent="">
    <sidebar-menu 
      :menu="menu" 
      :hideToggle="true" 
      :collapsed="collapsed"
      :width="'196px'" 
      @click="onClickSidebar"
    >
      <template v-slot:header>
        <div v-if="collapsed" class="sidebarheader">
          <span>Free Sim</span>
        </div>
        <div v-if="!collapsed" class="sidebarheader-extended">
          <img :src="user.avatar" alt="">
          <span>{{user.name}}</span>
        </div>
      </template>
    </sidebar-menu>
    <div class="main-box">
      <left-box />
      <chat-box />
    </div>
    <div class="adv-box">
    </div>
  </div> 
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import LeftBox from '@/components/Chatting/LeftBox.vue'
import ChatBox from '@/components/Chatting/ChatBox.vue'
import Calls from '@/components/Chatting/Calls.vue'

export default {
  name: 'MainLayout',
  components: {
    SidebarMenu,
    LeftBox,
    ChatBox,
    Calls,
  },
  data() {
    return {
      menu: [
        {
          href: '/download',
          title: 'Download App',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/download.png')
            }
          }
        },
        {
          href: '/download',
          title: 'Phones & Planse',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/phonesplanse.png')
            }
          }
        },
        {
          href: '/download',
          title: 'Settings',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/settings.png')
            }
          }
        },
        {
          href: '/download',
          title: 'Help',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/question.png')
            }
          }
        },
        {
          href: '/download',
          title: 'Sign Out',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/logout.png')
            }
          }
        },
      ],
      collapsed: true,
      user: {
        avatar: require('@/assets/images/user.png'),
        name: 'Kim Jonson',
      },
    }
  },
  methods: {
    onClickSidebar(event) {
      event.stopPropagation();
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {
    console.log('show after mounted', this.show)
    this.show = true;
  },
}
</script>

<style lang="scss" scoped>
div.main-layout {
  position: relative;
  display: flex;
  height: 100vh;
  padding-left: 70px;
  // padding-right: 286px;
  div.sidebarheader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 20px;
    height: 69px;
    margin-top: 22px;
    margin-bottom: 33px;
    span {
      font-size: 17px;
      font-weight: bold;
      color: white;
      white-space: nowrap;
      line-height: 20px;
      transform: rotate(90deg);
    }
  }
  div.sidebarheader-extended {
    display: flex;
    align-items: center;
    margin: 35px auto;
    img {
      width: 54px;
      height: 54px;
      border-radius: 100%;
    }
    span {
      font-weight: bold;
      font-size: 16px;
      color: white;
      margin-left: 10px;
    }
  }
  div.main-box {
    width: 100%;
    display: flex;
  }
  div.adv-box {
    max-width: 286px;
    width: 100%;
  }
}
</style>