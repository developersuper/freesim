<template>
  <transition v-if="modal !== ''" name="modal">
    <div class="modal-mask" @click="closeModal">
      <div class="modal-wrapper">
        <div 
          :class="modalContainer" 
          @click.stop=""
        >
          <slot>body</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Modal',
  components: {
  },
  props: {
  },
  computed: {
    ...mapGetters(['modal']),
    modalContainer() {
      if(this.modal === 'videocall'){
        return 'modal-container videocall'
      }
      if(this.modal === 'logoutfromalldevices' || this.modal === 'logoutfromthisdevice') {
        return 'modal-container logoutfromalldevices'
      }
      return 'modal-container'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('setModal', '')
    },
  },
  mounted() {
    console.log(this.modal)
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  min-height: 496px;
  max-width: 375px;
  width: 100%;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.videocall {
  min-height: unset;
  // height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  -webkit-height: calc(var(--vh, 1vh) * 100);
  max-width: unset;
}
.logoutfromalldevices {
  max-width: 416px;
  min-height: unset;
  height: 275px;
}
</style>