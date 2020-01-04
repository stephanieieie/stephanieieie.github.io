<template>
    <div :id="id">
        <template v-for="(i,index) in categoties">
            <div :id="i.id" :key="index" class="infoPart">
                <h1 class="infoTitle">{{i.label}}</h1>
                <component class="infoContent" v-bind:is="i.component" v-if="i.component"/>
            </div>
        </template>
    </div>
</template>

<script>
import education from './infoParts/education.vue'
import experience from './infoParts/experience.vue'
import portfolio from './infoParts/portfolio.vue'
import interest from './infoParts/interest.vue'

export default {
    name: 'infoSZ',
    components: {
        education,
        experience,
        portfolio,
        interest
    },
    data(){
        return {
            id: 'infoSZ'
        }
    },
    
    computed: {
        categoties(){
            return this.$store.getters.categoties;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){
            this.size();
        },
        size(){
            var h = $("#infoSZ").height();
            var w = $("#infoSZ").width();
            if (h>w) {
                var l = w*0.8
            } else {
                var l = h*0.8
            }
            //$(".infoContent").css("height",l);
            //$(".infoContent").css("width",l);
        },
    }
}
</script>

<style scoped>

</style>