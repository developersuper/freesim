<template>
  <div class="landing">
      <Header />
      <Download />
      <Choice />
      <AboutUs />
      <LastBlock />
      <Footer />
  </div>
</template>

<script>
import Header from '@/components/Landing/Header.vue'
import Download from '@/components/Landing/Download.vue'
import Choice from '@/components/Landing/Choice.vue'
import AboutUs from '@/components/Landing/AboutUs.vue'
import LastBlock from '@/components/Landing/LastBlock.vue'
import Footer from '@/components/Landing/Footer.vue'

export default {
  name: 'Landing',
  components: {
    Header,
    Download,
    Choice,
    AboutUs,
    LastBlock,
    Footer
  },
  data() {
    return {
    }
  },
}
</script>