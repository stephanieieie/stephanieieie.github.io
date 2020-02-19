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
        categories(){
            return this.$store.getters.categories;
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