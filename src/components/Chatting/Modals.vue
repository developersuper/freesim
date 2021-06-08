<template>
  <modal>
    <template v-slot>
      <call-history v-if="modal === 'callhistory'" />
      <voice-call-dial v-if="modal === 'dialpad' || modal === 'voicecalling'" />
      <video-call v-if="modal === 'videocall'"/>
      <contacts v-if="modal === 'contacts'" />
      <add-contact v-if="modal === 'addcontact'" />
    </template>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'

import Modal from './elements/Modal'
import CallHistory from './CustomModals/CallHistory'
import VoiceCallDial from './CustomModals/VoiceCallDial'
import VideoCall from './CustomModals/VideoCall'
import Contacts from './CustomModals/Contacts'
import AddContact from './CustomModals/AddContact'

export default {
  name: 'Modals',
  components: {
    Modal,
    CallHistory,
    VoiceCallDial,
    VideoCall,
    Contacts,
    AddContact,
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