<template>
  <modal :show="show" @show="show = $event">
    <template v-slot>
      <call-history v-if="modal === 'callhistory'" />
      <voice-call-dial v-if="modal === 'voicecalldial'" />
    </template>
  </modal>
</template>

<script>
import Modal from './elements/Modal'
import CallHistory from './CallModals/CallHistory'
import VoiceCallDial from './CallModals/VoiceCallDial'

export default {
  name: 'Calls',
  components: {
    Modal,
    CallHistory,
    VoiceCallDial,
  },
  data() {
    return {
      show: true,
      modal: 'voicecalldial'
    }
  }
}
</script>