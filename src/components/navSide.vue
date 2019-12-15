<template>
    <div :id="id">
        <b-nav pills vertical v-b-scrollspy:infoSZ>
            <b-nav-item>About Me</b-nav-item>
            <template v-for="(c,index) in categoties">
                <b-nav-item v-if="index==0" active :key="index" :href="c.secId" class='navItemSZ'>{{c.label}}</b-nav-item>
                <b-nav-item v-else :key="index" :href="c.secId" class='navItemSZ'>{{c.label}}</b-nav-item>
            </template>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: "navSide",
    data () {
        return {
            id: "navSide"
        }
    },
    
    computed: {
        categoties(){
            return this.$store.getters.categoties;
        }
    },

    mounted(){
        $(".navItemSZ .nav-link").click(function(){
            $(".navItemSZ .nav-link").removeClass("active");
            $(this).addClass("active");
        }),
        this.$nextTick(function() {
            //this.rePosition();
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