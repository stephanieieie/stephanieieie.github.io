<template>
    <div :id="id">
        <template v-for="(v,index) in education">
            <div :id="v.id" class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" :key="index" 
                @mouseover="overItem(v)" @mouseout="outItem(v)">
                <div class="resume-content">
                    <h4 class="mb-0">{{v.school}}</h4>
                    <div class="subheading mb-3">{{v.degree}}</div>
                    <div>{{v.subject}}</div>
                </div>
                <div class="resume-date text-md-right">
                    <span>{{v.time}}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    name: 'education',
    components: {},
    data(){
        return {
            id: 'education'        
        }
    },
    
    computed: {
        categoties(){
            return this.$store.getters.categoties;
        },
        education(){
            return this.$store.getters.education;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){
            var this_=this;
            $(".resume-item").mouseover(function(e){
                var target = $(this)[0];
                this_.mapFunc.clkContent(target);
                //$(this).css("background","#FF6347")
                //console.log(t.id);
            });
            $(".resume-item").mouseout(function(e){
                var target = $(this)[0];
                this_.mapFunc.unclkContent(target);
                //$(this).css("background","transparent")
                //console.log(t.id);
            });
        },
        overItem(v){
            var id = v.id;
            var pos = v.pos;
            var place = v.place;
            this.mapFunc.clkContent(id, pos, place);
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