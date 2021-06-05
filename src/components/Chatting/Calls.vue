<template>
  <modal>
    <template v-slot>
      <call-history v-if="modal === 'callhistory'" />
      <voice-call-dial v-if="modal === 'dialpad' || modal === 'voicecalling'" />
    </template>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['modal']),
  },
  data() {
    return {
    }
  }
}
</script>