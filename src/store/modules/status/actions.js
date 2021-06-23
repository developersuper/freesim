const actions = {
  setModal(context, modal) {
    context.commit('setModal', modal)
  },
  setChats(context, chats) {
    context.commit('setChats', chats)
  }
}

export default actions