<template>
  <div class="desktoplayout">
    <div class="toolbar">
      <div class="topbar">
        <div class="topbar-left">
          <span>Free SIM</span>
          <span>phone service</span>
        </div>
        <div class="icons">
          <span class="icons-minimize action">
            <svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="10" height="1" rx="0.5" fill="black"/>
            </svg>
          </span>
          <span class="icons-zoom action">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="9" height="9" stroke="black"/>
            </svg>
          </span>
          <span class="icons-close action">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.716797" width="13.3947" height="1" rx="0.5" transform="rotate(45.8094 0.716797 0)" fill="black"/>
              <rect y="9.47144" width="13.3947" height="1" rx="0.5" transform="rotate(-45 0 9.47144)" fill="black"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="menubar">
        <vue-file-toolbar-menu :contents="my_menu" />
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import VueFileToolbarMenu from './VueFileToolbarMenu.vue'
export default {
  name: 'DesktopLayout',
  components: {
    VueFileToolbarMenu ,
  },
  computed: {
    my_menu () {
      return [
        { text: "File", menu: [
          { 
            text: "Logout", 
            hotkey:"", 
            event: 'logout'
          },
          { text: null },
          { text: "Close Window",  hotkey: "Ctrl + W", event: ''}
        ] },
        { text: "Edit", menu: [
          { text: "Undo", hotkey:"Ctrl + Z", event: '' },
          { text: "Redo", hotkey:"Ctrl + Y", event: '' },
          { text: null },
          { text: "Cut", hotkey:"Ctrl + X", event: '' },
          { text: "Copy", hotkey:"Ctrl + C", event: '' },
          { text: "Paste", hotkey:"Ctrl + V", event: '' },
          { text: "Delete", hotkey:"" , event: ''},
          { text: null },
          { text: "Select All",  hotkey: "Ctrl + A", event: ''}
        ] },
        { text: "View", menu: [
          { text: "Reload", hotkey:"Ctrl + R", event: '' },
          { text: null },
          { text: "Actual Size", hotkey:"Ctrl + 0", event: '' },
          { text: "Zoom In", hotkey:"Ctrl + +", event: '' },
          { text: "Zoom Out", hotkey:"Ctrl + -", event: '' },
        ] },        
        { text: "Windows", menu: [
          { text: "Minimize", hotkey:"Ctrl + Z", event: '' },
          { text: "Zoom", hotkey:"" },
        ] },
        { text: "Help", menu: [
          { text: "Customer Support", hotkey:"", event: '' },
          { text: "About", hotkey:"", event: '' },
        ] },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
div.desktoplayout {
  height: 100vh;
  div.toolbar {
    div.topbar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 7px 17px;
      height: 30px;
      align-items: center;
      div.topbar-left {
        display: flex;
        align-items: center;
        span:nth-child(1) {
          font-weight: bold;
          font-size: 14px;
          color: #FF7777;
          margin-right: 5px;
        }
        span:nth-child(2) {
          font-size: 10px;
          color: #FF7777;
        }
      }
      div.icons {
        display: flex;
        align-items: center;
        span {
          align-self: stretch;
          margin-left: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    div.menubar {
      padding: 6px 17px;
      display: flex;
      align-items: center;
      height: 25px;
    }
  }
}
</style>