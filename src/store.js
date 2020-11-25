import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var hostname = ""

if(process.env.NODE_ENV === "development"){
  hostname = "http://localhost:8282"
}
else{
  hostname = "http://54.70.46.68:8282"
}

export default new Vuex.Store({
  state: {
    backURL: hostname,
  },
  mutations: {},
  actions: {},
});
