<template>
    <div :id="id">
        <b-nav pills vertical v-b-scrollspy:infoSZ>
            <b-nav-item>About Me</b-nav-item>            
            <b-nav-item
                v-for="(c,index) in categories"
                :key="index" 
                :href="c.secId" 
                :id="c.component"
                class='navItemSZ'
                v-bind:active="active==c.component"
            >
                {{c.label}}
            </b-nav-item>
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
        categories(){
            return this.$store.getters.categories;
        },
        active(){
            return this.$store.getters.active;
        }
    },

    updated(){
        debugger
    },

    mounted(){
        var this_ = this;
        $(".navItemSZ .nav-link").click(function(){
            this_.mapFunc.rmMarker();
            $(".navItemSZ .nav-link").removeClass("active");
            $(this).addClass("active");
            var activeId = $(this)[0].parentNode.id;
            this_.$store.commit("chgActive",activeId);
            //this_.mapFunc.addMarkers(activeId);
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