<template>
    <div :id="id">
        PORTFOLIO
    </div>
</template>

<script>

export default {
    name: 'portfolio',
    components: {},
    data(){
        return {
            id: 'portfolio'
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

        }
    }
}
</script>

<style scoped>

</style>