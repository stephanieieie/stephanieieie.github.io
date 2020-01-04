<template>
    <div :id="id">
        <div id="introCont">
            <h1>{{nameSZ}}</h1>
            <h3>GISer & Map Lover</h3>
        </div>
        <div id="scrollDown"></div>
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