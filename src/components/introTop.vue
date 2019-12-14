<template>
    <div :id="id">
        <h1>{{nameSZ}}</h1>
    </div>
</template>

<script>
export default {
    name: 'introTop',
    data(){
        return {
            id: 'introTop',
            bound: null
        }
    },
    
    computed: {
        nameSZ(){
            return this.$store.getters.nameSZ;
        }
    },

    mounted(){
        //this.init();
    },

    methods:{
        init(){
            this.getSize();
            /* this.$nextTick(()=>{
                this.getBound();
            }) */
        },
        getSize(){
            var h = $(window).height();
            $("#introTop").css("height",h);
        },
        getBound(){
            this.bound = this.mapFunc.getBound();
        }
    }
}
</script>

<style scoped>

</style>