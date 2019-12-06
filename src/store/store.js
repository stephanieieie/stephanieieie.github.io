import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nameSZ: "Stephanie Zhang"
    },
    getters: {
        nameSZ: state => state.nameSZ
    },
    mutations: {
    
    }
})