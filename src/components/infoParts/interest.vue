<template>
    <div :id="id">
        INTERTEST
    </div>
</template>

<script>

export default {
    name: 'interest',
    components: {},
    data(){
        return {
            id: 'interest'
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