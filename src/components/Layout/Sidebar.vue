<template>
  <sidebar-menu 
    :menu="menu" 
    :hideToggle="true" 
    :collapsed="collapsed"
    :width="'196px'" 
    :widthCollapsed="'66px'"
    @click="onClickSidebar"
    @item-click="onClickItem"
  >
    <template v-slot:header>
      <div v-if="collapsed && menutype === 'sidebarmenu'" class="sidebarheader">
        <span>Free SIM</span>
      </div>
      <div v-if="!collapsed && menutype === 'sidebarmenu'" class="sidebarheader-extended">
        <img :src="user.avatar" alt="">
        <span>{{user.name}}</span>
      </div>
      <div v-if="menutype === 'helpmenu'" class="helpmenu-backbtn action" @click="onSidebarMenu">
        <span class="helpmenu-backbtn-">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L2 6.13158L7 11" stroke="white" stroke-width="2"/>
          </svg>
        </span>
        Back
      </div>
    </template>
  </sidebar-menu>
</template>

<script>
import {mapGetters} from 'vuex'

import { SidebarMenu } from 'vue-sidebar-menu'
export default {
  name: 'Sidebar',
  components: {
    SidebarMenu,
  },
  computed: {
    ...mapGetters([
      'user',
      'viewport',
      'window',
    ])
  },
  data() {
    return {
      sidebarmenu: [
        {
          href: '/download',
          title: 'Download App',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/download.png'),
            }
          }
        },
        {
          href: '/phonesandplanes',
          title: 'Phones & Plans',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/phonesplanse.png')
            }
          }
        },
        {
          href: '/settings',
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
          title: 'Help',
          icon: {
            element: 'img',
            class: 'sidebar-icon',
            attributes: {
              src: require('@/assets/images/icons/question.png'),
              onclick: this.onHelp,
            }
          }
        },
        {
          href: '/logout',
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
      menutype: 'sidebarmenu',
      helpmenu: [
        {
          href: '/download',
          title: 'Support',
          class: 'helpmenu-item',
        },
        {
          href: '/download',
          title: 'About',
          class: 'helpmenu-item',
        },
        {
          href: '/download',
          title: 'International Rates',
          class: 'helpmenu-item',
        },
        {
          href: '/download',
          title: 'Blogs',
          class: 'helpmenu-item',
        },
        {
          href: '/download',
          title: 'Terms of Use',
          class: 'helpmenu-item',
        },
        {
          href: '/download',
          title: 'Privacy & Policy',
          class: 'helpmenu-item',
        },
        // {
        //   href: '/download',
        //   title: '2G Fair Use Policy',
        //   class: 'helpmenu-item',
        // },
        {
          href: '/download',
          title: 'Download Debug Logs',
          class: 'helpmenu-item',
        },
      ], 
      menu: [],
    }
  },
  mounted() {
    this.show = true
    this.menu = [...this.sidebarmenu]
    console.log(this.$store.state)
  },
  methods: {
    onClickSidebar(event) {
      event.stopPropagation();
      console.log('onclick side a')
      if(this.menutype === 'helpmenu') return
      this.collapsed = !this.collapsed
    },
    onHelp(event) {
      event.stopPropagation()
      this.menu = [...this.helpmenu]
      this.collapsed = false
      this.menutype = 'helpmenu'
    },
    onSidebarMenu(event) {
      event.stopPropagation()
      this.menu = [...this.sidebarmenu]
      this.menutype = 'sidebarmenu'
    },
    onClickItem(event, item) {
      event.stopPropagation()
      if(item.title === 'Help') {
        this.menu = [...this.helpmenu]
        this.collapsed = false
        this.menutype = 'helpmenu'
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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
  div.helpmenu-backbtn {
    color: white;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 21px;
    margin-left: 21px;
    margin-top: 28px;
    span.helpmenu-backbtn-icon {
      margin-right: 10px;
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
</style>