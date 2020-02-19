<template>
    <div :id="id">
        <template v-for="(v,index) in experience">
            <div :id="v.id" :key="index"  class="resume-item experience mb-5"
                @mouseover="overItem(v)" @mouseout="outItem(v)">
                <div class="resume-overview d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h4 class="mb-0">{{v.company}}</h4>
                        <div class="subheading mb-3">{{v.title}}</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <div>{{v.place}}</div>
                        <div>{{v.time}}</div>
                    </div>
                </div>
                <div class="resume-descrp">
                    <div v-for="(vd,indexVD) in v.description" :key="indexVD">
                        &bull;&nbsp;&nbsp;{{vd}}
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    name: 'experience',
    components: {},
    data(){
        return {
            id: 'experience'
        }
    },
    
    computed: {
        categories(){
            return this.$store.getters.categories;
        },
        experience(){
            return this.$store.getters.experience;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){

        },
        overItem(v){
            var id = v.id;
            var pos = v.pos;
            var place = v.place;
            var active = this.$store.getters.categories.filter(a => a.component==this.id);
            var bgColor = active[0].color;
            this.mapFunc.clkContent(id, pos, place, bgColor);
        },
        outItem(v){
            var id = v.id;
            var pos = v.pos;
            var place = v.place;
            this.mapFunc.unclkContent(id, pos, place);
        }
    }
}
</script>

<style scoped>

</style>