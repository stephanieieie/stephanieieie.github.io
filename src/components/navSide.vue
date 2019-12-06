<template>
    <div :id="id">
        <b-nav vertical>
            <b-nav-item v-for="c in categoties" :key="c">{{c}}</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: "navSide",
    data () {
        return {
            id: "navSide",
            categoties: [
                "About Me",
                "Education",
                "Experience",
                "Portfolio",
                "Interests"
                ]
        }
    },
    
    updated(){
        this.rePosition();
    },

    mounted(){
        this.$nextTick(function() {
            this.rePosition();
        })
    },

    methods:{
        rePosition(){
            var windowsH = $(window).innerHeight()/2-100;
            $("#navSide").css('top',windowsH+'px');
            $(window).resize(function() {
                var windowsH = $(window).innerHeight()/2-100;
                $("#navSide").css('top',windowsH+'px');
            });
        }
    }
    
}
</script>

<style scoped>

</style>