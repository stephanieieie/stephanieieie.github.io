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