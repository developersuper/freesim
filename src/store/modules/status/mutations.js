
const mutations = {
  setMode(state, mode) {
    state.activechatter = -1
    state.chatSearch = ''
    state.mode = mode
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
  }
}

export default mutations