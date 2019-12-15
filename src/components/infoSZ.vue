<template>
    <div :id="id" style="position:relative; height:300px; overflow-y:scroll;">
        <template v-for="(i,index) in categoties">
            <h4 :id="i.id" :key="index">{{i.label}}</h4>
            <component class="infoPart" v-bind:is="i.component" v-if="i.component"/>
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
            $(".infoPart").css("height",l);
            $(".infoPart").css("width",l);
        },
    }
}
</script>

<style scoped>

</style>