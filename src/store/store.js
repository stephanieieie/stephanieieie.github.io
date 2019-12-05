import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        name: "Stephanie Zhang"
    },
    getters: {
        name: state => state.name
    },
    mutations: {
    
    }
})