const getters = {
  mode: (state) => state.mode,
  chats: (state) => state.chats,
  activechatter: (state) => state.activechatter,
  chatSearch: (state) => state.chatSearch,
  messages: (state) => state.chats[state.activechatter]?.messages,
  modal: (state) => state.modal,
  callHistories: (state) => state.callHistories,
}

export default getters;