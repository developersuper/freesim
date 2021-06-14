<template>
  <context-menu :display="true" ref="chatboxheadersettingmenu">
    <ul class="contextmenu custom-chatboxheadersettingmenu">
      <li> Delete Conversation</li>
    </ul>
  </context-menu>
  <div class="settingsbar" :style="call ? {maxWidth: '70px'} : {}">
    <span class="icon action" @click="setVideoCall">
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.75024C0 2.0209 0.289731 1.32143 0.805456 0.8057C1.32118 0.289975 2.02065 0.00024416 2.75 0.00024416H13.0625C13.7295 0.0001657 14.3738 0.242509 14.8754 0.682145C15.377 1.12178 15.7017 1.72874 15.7891 2.38999L20.0654 0.489744C20.2747 0.39648 20.504 0.357007 20.7324 0.374912C20.9609 0.392817 21.1812 0.467532 21.3735 0.592268C21.5657 0.717003 21.7237 0.887801 21.8331 1.08914C21.9425 1.29048 21.9999 1.51597 22 1.74512V12.0054C21.9998 12.2343 21.9424 12.4596 21.8331 12.6608C21.7237 12.862 21.5659 13.0327 21.3738 13.1574C21.1818 13.2821 20.9617 13.3568 20.7334 13.3749C20.5052 13.3929 20.276 13.3537 20.0667 13.2607L15.7891 11.3605C15.7017 12.0217 15.377 12.6287 14.8754 13.0683C14.3738 13.508 13.7295 13.7503 13.0625 13.7502H2.75C2.02065 13.7502 1.32118 13.4605 0.805456 12.9448C0.289731 12.4291 0 11.7296 0 11.0002V2.75024ZM15.8125 9.86587L20.625 12.0054V1.74512L15.8125 3.88462V9.86587ZM2.75 1.37524C2.38533 1.37524 2.03559 1.52011 1.77773 1.77797C1.51987 2.03584 1.375 2.38557 1.375 2.75024V11.0002C1.375 11.3649 1.51987 11.7147 1.77773 11.9725C2.03559 12.2304 2.38533 12.3752 2.75 12.3752H13.0625C13.4272 12.3752 13.7769 12.2304 14.0348 11.9725C14.2926 11.7147 14.4375 11.3649 14.4375 11.0002V2.75024C14.4375 2.38557 14.2926 2.03584 14.0348 1.77797C13.7769 1.52011 13.4272 1.37524 13.0625 1.37524H2.75Z" fill="#FF0404"/>
      </svg>
    </span>
    <span class="icon action" @click="setVoiceCall">
      <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.55443 6.73349L7.55427 6.73364L5.44444 8.87183L5.22272 9.09653L5.28231 9.40652C5.52613 10.6748 6.08376 11.8859 6.93407 13.0383C7.74981 14.1603 8.8008 15.1142 10.0227 15.8457L10.2747 15.9966L10.5485 15.89L13.1958 14.8594L13.196 14.8593C13.9675 14.5586 14.8403 14.7766 15.3623 15.3863L15.363 15.3871L16.9765 17.2646C17.5814 17.9693 17.5602 19.0013 16.9211 19.686L16.0137 20.6568L16.0132 20.6574C15.255 21.4705 14.1082 21.8319 13.0044 21.6009C10.1349 20.9995 7.28112 18.7687 4.4686 14.7199L4.46858 14.7198C1.65041 10.6634 0.587226 7.24862 1.07542 4.42767L1.07546 4.42746C1.26001 3.35877 2.01023 2.45617 3.05985 2.06168L3.06005 2.06161L4.31328 1.59009L4.31333 1.59008C5.21779 1.24969 6.2238 1.62063 6.67379 2.43347C6.67381 2.43351 6.67383 2.43354 6.67385 2.43358C6.67389 2.43365 6.67392 2.43371 6.67396 2.43378L7.8607 4.5814C7.86076 4.58151 7.86082 4.58162 7.86088 4.58172C8.24768 5.28381 8.12804 6.1526 7.55443 6.73349Z" stroke="#FF0404" stroke-width="1.2"/>
      </svg>
    </span>
    <span v-if="!call" class="setting-icon action" @click="openMenu" >
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ContextMenu from './elements/ContextMenu'

export default {
  name: 'ChatBoxHeaderSettingsBar',
  components: {
    ContextMenu,
  },
  computed: {
    ...mapGetters(['call'])
  },
  methods: {
    openMenu(e) {
      e.stopPropagation();
      e.preventDefault();
      this.$refs.chatboxheadersettingmenu.open(e)
    },
    setVideoCall() {
      this.$store.dispatch('setModal', 'videocall')
    },
    setVoiceCall() {
      this.$store.dispatch('setModal', 'voicecalling')
    }
  }
}
</script>
<style lang="scss" scoped>
div.settingsbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 110px;
  min-width: 80px;
  width: 100%;
  margin:0px 21px;
  span.setting-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 21px;
    span {
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background-color: #FF1414;
    }
  }
}
ul.custom-chatboxheadersettingmenu {
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.25);
  width: 138px !important;
  li {
    color: #949494;
    font-size: 12px;
    padding: 10px 15px;
  }
}
</style>