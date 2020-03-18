import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nameSZ: "Stephanie Zhang",
        categories: [
            {id:"edu",secId:"#edu",navId:"eduNav",label:"Education",color:"#0DAF7A"},
            {id:"exp",secId:"#exp",navId:"expNav",label:"Experience",color:"#CD5C5C"},
            {id:"port",secId:"#port",navId:"portNav",label:"Portfolio",color:""},
            {id:"int",secId:"#int",navId:"intNav",label:"Interests",color:""}
        ],
        activeNav: "edu",
        edu:{
            eduMaster:{
                id: "eduMaster",
                school: "University of Illinois at Urbana-Champaign",
                time: "August 2016 - December 2017",
                degree: "Master of Science",
                subject: "Geographic Information Science",
                pos: [-88.226174, 40.107491],
                place: "Champaign, US"
            },
            eduBachelor:{
                id: "eduBachelor",
                school: "University of Toronto",
                time: "September 2011 - May 2015",
                degree: "Bachelor of Arts",
                subject: "Major in Urban Studies, Minor in German Studies",
                pos: [-79.398339, 43.662573],
                place: "Toronto, Canada"
            },
            eduSecondary:{
                id: "eduSecondary",
                school: "Markville Secondary School",
                time: "September 2009 - June 2011",
                degree: "Secondary School Diploma",
                subject: null,
                pos: [-79.288813, 43.877561],
                place: "Markham, Canada"
            }
        },
        exp:{
            exp3:{
                id: "exp3",
                company: "HAOYA INFORMATION TECHNOLOGY",
                title: "Software Engineer",
                time: "July 2018-present",
                description: {
                    0: "Develop desktop GIS tools to automate spatial data conversion and analysis using python",
                    1: "Create national-wide 3d terrain base map in multiple scale levels, using MDOW hillshade tool and Pansharpening",
                    2: "Develop python scripts to automate map service publishing and manage map services through arcgis server",
                    3: "Update data and implement quality control in Oracle database, and manage spatial data in ArcSDE geodatabase",
                    4: "Produce vector tile to create base map layer, create Mapbox style documents, and host vector tile through TileServer GL",
                    5: "Participate in building interactive webmap project using Vue.js and Mapbox GL JS"
                },
                pos: [113.316703, 23.122824],
                place: "Guangzhou, China"
            },
            exp2:{
                id: "exp2",
                company: "DOW AGROSCIENCE",
                title: "GIS Intern",
                time: "March 2017-December 2017",
                description: {
                    0: "Created high quality cartography, collected and managed GIS data, and developed scripts with Python and R to automate GIS map production",
                    1: "Assisted with normalizing enterprise server database, applying database constraints, and developing python scripts to implement quality assurance/control for enterprise GIS",
                    2: "Provided continuous improvement and support for web application through debugging, and reporting",
                    3: "Used PowerBI to create interactive technical report for business intelligence purpose"

                },
                pos: [-88.238896, 40.090209],
                place: "Champaign, US"
            },
            exp1:{
                id: "exp1",
                company: "ABUNDANT SOLAR ENERGY",
                title: "GIS Analyst",
                time: "June 2016-November 2016",
                description: {
                    0: "Collected soil, zoning, and property information in Ontario, Canada, and Maryland, US",
                    1: "Built models to automate site selection for solar farms, and decision making on project areas with ArcGIS and python script",
                    2: "Built interactive web maps for project development tracking through ArcGIS Online"
                },
                pos: [-79.328236, 43.772905],
                place: "Toronto, Canada"
            },
            exp0:{
                id: "exp0",
                company: "GUANGDONG ELECTRIC POWER DESIGN INSTITUTE",
                title: "GIS Intern",
                time: "September 2015-December 2015",
                description: {
                    0:"Participated in electric network mapping for five provinces in south China",
                    1:"Led the Point of Interests section, including raw data processing, model building with tools of Spatial Analysis and Generalization in ArcGIS, and subset selection through VB Script and FME techniques",
                    2:"Finalized map products, created a mapping style, and produced tiles in different scales"
                },
                pos: [113.457893, 23.160586],
                place: "Guangzhou, China"
            },
        },
        showResume: false,
        showPortImg: false
    },
    getters: {
        nameSZ: state => state.nameSZ,
        categories: state => state.categories,
        activeNav: state => state.activeNav,
        edu: state => state.edu,
        exp: state => state.exp,
        showResume: state => state.showResume,
        showPortImg: state => state.showPortImg
    },
    mutations: {
        chgActiveNav: (state, id) => {
            state.activeNav = id;
            if (id=="port"){
                state.showPortImg=true;
            } else {
                state.showPortImg=false;
            }
        },
        chgShowResume: (state, status) => {
            state.showResume = status;
        }/* ,
        chgShowPortImg: (state, status) => {
            state.showPortImg = status;
        } */
    }
})