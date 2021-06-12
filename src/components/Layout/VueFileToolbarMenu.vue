<template>
  <div class="filetoolbarmenu">
    <template v-for="(content, index) in contents" :key="index">
      <Menu :items="content.menu" :title="content.text" @event="handleEvent"/>
    </template>
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  props: {
    contents: Array,
  },
  name: 'VueFileToolbarMenu',
  components: {
    Menu,
  },
  methods: {
    handleEvent(e) {
      if(e === 'logout') {
        this.$router.push('/logout')
        return 
      }
    }
  }
}
</script>
<style lang="scss" scoped>
div.filetoolbarmenu {
  display: flex;
  align-items: center;
}
</style>