import { createStore } from 'vuex';

import user from './modules/user';
import status from './modules/status'

const store = createStore({
  modules: {
    user,
    status
  }
});

export default store;