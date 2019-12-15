<template>
    <div :id="id">
        <div id="mapCon"></div>
        <div id="location">{{location}}</div>
    </div>
</template>

<script>

export default {
    name: 'mapSZ',
    components: {},
    data(){
        return {
            id: 'mapSZ',
            map: null,
            location: "Guangzhou, China"
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
                this.size();
                this.initMap();
            })
        },
        size(){
            var h = $("#mapSZ").height();
            var w = $("#mapSZ").width();
            if (h>w) {
                var l = w*0.8
            } else {
                var l = h*0.8
            }
            $("#mapCon").css("height",l);
            $("#mapCon").css("width",l);
        },
        initMap(){
            var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
            mapboxgl.accessToken = "pk.eyJ1IjoiYnJpZ2h0Zm9yZXN0IiwiYSI6ImNqcmFkandueDByM2k0OXBoenJtdG50MHUifQ.tnwKC4wsmdQhhrTSB2zZSA"
            var map = new mapboxgl.Map({
                container: "mapCon",
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

</style>