<template>
  <!-- <div class="menu">Menu---------------------------sdfwef</div> -->
  <div class="chatting">
    <main-layout />
  </div>
</template>

<script>
import MainLayout from '@/components/Chatting/MainLayout.vue'

export default {
  name: 'Chatting',
  components: {
    MainLayout,
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