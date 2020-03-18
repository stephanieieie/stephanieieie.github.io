<template>
    <div :id="id">
        <div class="portImg"></div>
    </div>
</template>

<script>

export default {
    name: 'port',
    components: {},
    data(){
        return {
            id: 'port'
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