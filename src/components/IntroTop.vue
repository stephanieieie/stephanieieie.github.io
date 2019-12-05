<template>
    <div>
        <h1>{{name}}</h1>
        <h2>{{bound}}</h2>
    </div>
</template>

<script>
export default {
    name: 'introTop',
    data(){
        return {
            bound: null
        }
    },
    
    computed: {
        name(){
            return this.$store.getters.name;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){
            this.$nextTick(()=>{
                this.getBound();
            })
        },
        getBound(){
            this.bound = this.mapFunc.getBound();
        }
    }
}
</script>

<style scoped>

</style>