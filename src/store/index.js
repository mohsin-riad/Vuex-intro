import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 10,
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += parseInt(payload);
    },
    subFromCounter(state, payload) {
      state.counter -= parseInt(payload);
    },

  },
  actions: {
  },
  modules: {
  }
})
