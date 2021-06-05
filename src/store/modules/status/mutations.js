
const mutations = {
  setMode(state, mode) {
    state.activechatter = -1
    state.chatSearch = ''
    state.mode = mode
    if(mode == 'calls') {
      state.modal = 'callhistory'
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
  }
}

export default mutations