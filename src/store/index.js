import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phrase: []
  },
  getters: {
    phrase: state => state.phrase
  },
  mutations: {
    setPhrase(state, phrase) {
      state.phrase = phrase;
    }
  }
});
