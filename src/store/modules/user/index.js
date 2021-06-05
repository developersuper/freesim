import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  user: {
    avatar: require('@/assets/images/user.png'),
    name: 'Kim Jonson',
    phone: '(601) 779-978',
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}