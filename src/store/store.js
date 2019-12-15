import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nameSZ: "Stephanie Zhang",
        categoties: [
            {id:"Edu",secId:"#Edu",label:"Education",component:"education"},
            {id:"Exp",secId:"#Exp",label:"Experience",component:"experience"},
            {id:"Port",secId:"#Port",label:"Portfolio",component:"portfolio"},
            {id:"Int",secId:"#Int",label:"Interests",component:"interest"}
        ]
    },
    getters: {
        nameSZ: state => state.nameSZ,
        categoties: state => state.categoties
    },
    mutations: {
    
    }
})