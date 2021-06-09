<template>
  <!-- <div class="menu">Menu---------------------------sdfwef</div> -->
  <desktop-layout>
    <template v-slot>
      <div class="chatting">
        <main-layout />
      </div>
    </template>
  </desktop-layout>
</template>

<script>
import DesktopLayout from '@/components/Layout/DesktopLayout.vue'
import MainLayout from '@/components/Chatting/MainLayout.vue'

export default {
  name: 'Chatting',
  components: {
    MainLayout,
    DesktopLayout,
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 55px;
  width: 100%;
  position: absolute;
  background-color: green;
}
</style>