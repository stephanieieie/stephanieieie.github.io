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
        ],
        active: "education",
        education:{
            eduMaster:{
                id: "eduMaster",
                school: "University of Illinois at Urbana-Champaign",
                time: "August 2016 - December 2017",
                degree: "Master of Science",
                subject: "Geographic Information Science",
                pos: [-88.226164,40.107413],
                place: "Champaign, US"
            },
            eduBachelor:{
                id: "eduBachelor",
                school: "University of Toronto",
                time: "September 2011 - May 2015",
                degree: "Bachelor of Arts",
                subject: "Major in Urban Studies, Minor in German Studies",
                pos: [-79.398689, 43.662563],
                place: "Toronto, Canada"
            },
            eduSecondary:{
                id: "eduSecondary",
                school: "Markville Secondary School",
                time: "September 2009 - June 2011",
                degree: "Secondary School Diploma",
                subject: null,
                pos: [-79.289156, 43.877499],
                place: "Markham, Canada"
            }
        }
    },
    getters: {
        nameSZ: state => state.nameSZ,
        categoties: state => state.categoties,
        active: state => state.active,
        education: state => state.education
    },
    mutations: {
        chgActive: (state, active) => {
            state.active = active;
        }
    }
})