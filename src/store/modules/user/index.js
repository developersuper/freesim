import getters from './getters.js'
import mutations from './mutations';
import actions from './actions';

const state = {
  status: '',
  user: null,
  token: localStorage.getItem('token') || '',
};

export default {
  state,
  mutations,
  actions,
  getters
};