const getters = {
  getUser: (state) => state.user,
  getToken: (state) => state.token,
  isLoggedIn: (state) => {
    console.log('isLoggineIn called');
    return state.user && state.token ? true : false;
   }
}

export default getters;