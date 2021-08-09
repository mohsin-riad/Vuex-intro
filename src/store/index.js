import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    history: [0]
  },
  mutations: {
    addToCounter(state, payload) {
      state.counter += parseInt(payload);
      state.history.push(state.counter)
    },
    subFromCounter(state, payload) {
      state.counter -= parseInt(payload);
      state.history.push(state.counter)
    },
    mulWithCounter(state, payload) {
      state.counter *= parseInt(payload);
      state.history.push(state.counter)
    },
    divFromCounter(state, payload) {
      state.counter /= parseInt(payload);
      state.history.push(state.counter)
    },
  },
  actions: {
    async addRandomNo(context) {
      const baseURL = "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new";
      const response = await axios.get(baseURL);
      context.commit("addToCounter", response.data);
    },
    async subRandomNo(context) {
      const baseURL = "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new";
      const response = await axios.get(baseURL);
      context.commit("subFromCounter", response.data);
    },
    async mulRandomNo(context) {
      const baseURL = "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new";
      const response = await axios.get(baseURL);
      context.commit("mulWithCounter", response.data);
    },
    async divRandomNo(context) {
      const baseURL = "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new";
      const response = await axios.get(baseURL);
      context.commit("divFromCounter", response.data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if(number === payload){
          indexes.push(index)
        }
      });
      return indexes
    }
  },
  modules: {
  }
})
