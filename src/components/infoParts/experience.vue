<template>
    <div :id="id">
        EXPERIENCE
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