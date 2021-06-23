
const mutations = {
  setMode(state, mode) {
    state.activechatter = 0
    state.chatSearch = ''
    state.mode = mode
    // alert(mode)
    if(mode == 'calls') {
      state.modal = 'callhistory'
    }
    if(mode === 'contacts') {
      state.modal = 'contacts'
    }
  },
  setActiveChatter(state, index) {
    state.activechatter = index
    state.chatSearch = ''
  },
  setChatSearch(state, text) {
    state.chatSearch = text
  },
  setModal(state, modal) {
    state.modal = modal
  },
  setViewport(state, viewport) {
    if(state.viewport === viewport) return
    state.viewport = viewport
    state.window = 'rightbox'
  },
  setWindow(state, window) {
    state.window = window
  },
  setCall(state, call) {
    state.call = call
  },
  setChats(state, chats) {
    state.chats = chats
  }
}

export default mutations