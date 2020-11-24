import Vue from "vue";
import Vuex from "vuex";
import {getAuthenticationToken} from '@/dataStorage';
import {setAuthenticationToken} from '@/dataStorage';
import {removeAuthenticationToken} from '@/dataStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backURL: "http://localhost:8282",
    logged: false,
  },
  mutations: {

    initialiseLogged(state) {
      if (getAuthenticationToken()) {
        state.logged = true;
      }
    },
    login(state, token){
      state.logged = true
      setAuthenticationToken(token);
    },
    logout(state){
      state.logged = false
      removeAuthenticationToken();
    }

  },
  actions: {},
});
