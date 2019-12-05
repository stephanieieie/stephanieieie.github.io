<template>
    <h1>{{name}}</h1>
</template>

<script>
export default {
    name: 'introTop',
    data(){
        return {

        }
    },
    
    computed: {
        name(){
            return this.$store.getters.name;
        }
    }
}
</script>

<style scoped>

</style>