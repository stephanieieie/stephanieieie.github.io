<template>
    <div :id="id">
        <b-carousel
            id="intCarousel"
            v-model="intId"
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
</template>

<script>

export default {
    name: 'int',
    components: {},
    data(){
        return {
            id: 'int',
            intId: 0,
            sliding: null
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