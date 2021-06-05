
const mutations = {
  init(state) {
    state.activechatter = -1
    state.chatSearch = ''
  },
  setMode(state, mode) {
    this.init()
    state.mode = mode
  },
  setActiveChatter(state, index) {
    state.activechatter = index
    state.chatSearch = ''
  },
  setChatSearch(state, text) {
    state.chatSearch = text
  },
}

export default mutations