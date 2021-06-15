<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const ww = window.innerWidth;
      if(ww < 734) {
        this.$store.commit('setViewport', 'mobile')
      }else {
        this.$store.commit('setViewport', 'desktop')
      }
    }
  }
}
</script>