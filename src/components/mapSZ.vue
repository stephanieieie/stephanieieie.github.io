<template>
    <div :id="id">
    </div>
</template>

<script>

export default {
    name: 'mapSZ',
    components: {},
    data(){
        return {
            id: 'mapSZ',
            map: null
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
            var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
            mapboxgl.accessToken = "pk.eyJ1IjoiYnJpZ2h0Zm9yZXN0IiwiYSI6ImNqcmFkandueDByM2k0OXBoenJtdG50MHUifQ.tnwKC4wsmdQhhrTSB2zZSA"
            var map = new mapboxgl.Map({
                container: "mapSZ",
                style: "mapbox://styles/mapbox/streets-v10",
                center: [114, 38.54],
                zoom: 3,
                attributionControl: false
            });
            this.map = map;
            this.mapFunc.map=map;
        }
    }
}
</script>

<style scoped>
#mapSZ{
    width: 800px;
    height: 800px;
}
</style>