import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'BMW', proce: 80000},
            { name: 'Marcedes', proce: 70000},
            { name: 'Tesla', proce: 60000},
            { name: 'Toyota', proce: 50000}
        ]
    }
})