<template>
    <div :id="id">
        <div id="mapBx" v-show="!showPortImg">
            <div id="mapCon"></div>
            <div id="mapLgd">
                <div id="lgdCon">
                    <div class="lgd">
                        <div class="marker_edu"></div>
                        <div class="lgdTxt">Study</div>
                    </div>
                    <div class="lgd">
                        <div class="marker_exp"></div>
                        <div class="lgdTxt">Work</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="portImg" v-show="showPortImg">
            <b-carousel
                id="portCarousel"
                v-model="portId"
                :interval="50000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                >
                <b-carousel-slide caption="1stPort">
                    <p>1st</p>
                </b-carousel-slide>
                <b-carousel-slide caption="2ndPort">
                    <p>2nd</p>
                </b-carousel-slide>
                <b-carousel-slide caption="3rdPort">
                    <p>3rd</p>
                </b-carousel-slide>
            </b-carousel>
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
            location: "Guangzhou, China",
            portId: 0,
            sliding: null
        }
    },
    
    computed: {
        showPortImg(){
            return this.$store.getters.showPortImg;
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
            $("#mapBx").css("width",l);
            $(".infoContent").css("height",l);
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
            this.mapFunc.addMarkers("edu");
            this.mapFunc.addMarkers("exp");
        },
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>

<style scoped>

</style>