<template>
  <div class="phonesandplaneswrapper">
      <Header />
      <phones-and-planes-body />
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import PhonesAndPlanesBody from '@/components/PhonesAndPlanesBody.vue'
import Footer from '@/components/Landing/Footer.vue'

export default {
  name: 'PhonesAndPlanes',
  components: {
    Header,
    PhonesAndPlanesBody,
    Footer
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
div.phonesandplaneswrapper {
  height: 100vh;
}
@media screen and (max-width: 1000) {
div.phonesandplaneswrapper {
  height: unset;
}
}
</style>