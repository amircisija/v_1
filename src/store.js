import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cars: [
            { name: 'Audi', price: 40 },
            { name: 'BMW', price: 50 },
            { name: 'Fiat', price: 35 }
        ]
    },
    mutations: {},
    actions: {}
});
