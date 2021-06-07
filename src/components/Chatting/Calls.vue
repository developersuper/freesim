<template>
  <modal>
    <template v-slot>
      <call-history v-if="modal === 'callhistory'" />
      <voice-call-dial v-if="modal === 'dialpad' || modal === 'voicecalling'" />
      <video-call v-if="modal === 'videocall'"/>
    </template>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'

import Modal from './elements/Modal'
import CallHistory from './CallModals/CallHistory'
import VoiceCallDial from './CallModals/VoiceCallDial'
import VideoCall from './CallModals/VideoCall'

export default {
  name: 'Calls',
  components: {
    Modal,
    CallHistory,
    VoiceCallDial,
    VideoCall,
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