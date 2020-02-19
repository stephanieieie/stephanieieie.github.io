<template>
    <div :id="id">
        <div id="mapCon"></div>
        <div id="mapLgd">
            <div class="lgd">
                <div class="marker_education"></div>
                <div class="lgdTxt">Study</div>
            </div>
            <div class="lgd">
                <div class="marker_experience"></div>
                <div class="lgdTxt">Work</div>
            </div>
        </div>
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
        active(){
            return this.$store.getters.active;
        },
        name(){
            return this.$store.getters.name;
        }
    },

    mounted(){
        this.init();
    },

    watch:{
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
                center: [-84,41],
                zoom: 3,
                attributionControl: false
            });
            this.map = map;
            this.mapFunc.map=map;
            this.mapFunc.addMarkers("education");
            this.mapFunc.addMarkers("experience");
        }
    }
}
</script>

<style scoped>

</style>