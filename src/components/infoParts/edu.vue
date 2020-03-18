<template>
    <div :id="id">
        <template v-for="(v,index) in education">
            <div :id="v.id" class="resume-item education mb-5" :key="index" 
                @mouseover="overItem(v)" @mouseout="outItem(v)">
                <div class="resume-overview d-flex flex-column flex-md-row justify-content-between">
                    <div class="resume-content">
                        <h4 class="mb-0">{{v.school}}</h4>
                        <div class="subheading mb-3">{{v.degree}}</div>
                        <div>{{v.subject}}</div>
                    </div>
                    <div class="resume-date text-md-right">
                        <div>{{v.place}}</div>
                        <div>{{v.time}}</div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    name: 'edu',
    components: {},
    data(){
        return {
            id: 'edu'        
        }
    },
    
    computed: {
        categories(){
            return this.$store.getters.categories;
        },
        education(){
            return this.$store.getters.edu;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){
            var this_=this;
            /* $(".resume-item").mouseover(function(e){
                var target = $(this)[0].id;
                //this_.mapFunc.clkContent(target);
                //$(this).css("background","#FF6347")
                //console.log(t.id);
            });
            $(".resume-item").mouseout(function(e){
                var target = $(this)[0].id;
                //this_.mapFunc.unclkContent(target);
                //$(this).css("background","transparent")
                //console.log(t.id);
            }); */
        },
        overItem(v){
            var id = v.id;
            var pos = v.pos;
            var place = v.place;
            var active = this.$store.getters.categories.filter(a => a.id==this.id);
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