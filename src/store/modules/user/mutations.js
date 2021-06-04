
const mutations = {
  createUser(state, payload) {
    state.user = { ...payload };
  },
  updateUser(state, payload) {
    state.user = { ...state.user, ...payload };
  },
  setToken(state, payload) {
    state.token = payload;
  },
  signOut(state) {
    state.user = null;
    state.token = '';
  }
};

export default mutations;