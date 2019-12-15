<template>
    <div :id="id">
        <b-carousel
            style="text-shadow: 0px 0px 2px #000"
            no-animation
            indicators
        >
            <b-carousel-slide>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">University of Illinois at Urbana Champaign</h3>
                        <div class="subheading mb-3">Master of Science</div>
                        <div>Geographic Information Science</div>
                        <p>GPA: 3.23</p>
                    </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">August 2016 - December 2017</span>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide>
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                            <h3 class="mb-0">University of Toronto</h3>
                            <div class="subheading mb-3">Bachelor of Arts</div>
                            <div>Major in Urban Studies, Minor in German Studies</div>
                            <p>GPA: 3.23</p>
                        </div>
                    <div class="resume-date text-md-right">
                        <span class="text-primary">August 2011 - May 2015</span>
                    </div>
                </div>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>

export default {
    name: 'education',
    components: {},
    data(){
        return {
            id: 'education'
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