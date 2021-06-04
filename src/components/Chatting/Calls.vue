<template>
  <modal :show="show" @show="show = $event">
    <template v-slot>
      <call-history v-if="modal === 'history'" />
      <dial v-if="modal === 'dial'" />
      <on-call v-if="modal === 'oncall'" />
    </template>
  </modal>
</template>

<script>
import Modal from './elements/Modal'
import CallHistory from './CallModals/CallHistory'
import Dial from './CallModals/Dial'
import OnCall from './CallModals/OnCall'

export default {
  name: 'Calls',
  components: {
    Modal,
    CallHistory,
    Dial,
    OnCall,
  },
  data() {
    return {
      show: true,
      modal: 'history'
    }
  }
}
</script>