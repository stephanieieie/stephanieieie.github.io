<template>
    <div :id="id">
        <b-nav pills vertical v-b-scrollspy:infoSZ>           
            <b-nav-item
                v-for="(c,index) in categories"
                :key="index" 
                :href="c.secId" 
                :id="c.navId"
                class='navItemSZ'
                :active="activeNav==c.id"
                ref="navItem"
            >
                {{c.label}}
            </b-nav-item>
            <b-nav-item id="resumeNav">Resume</b-nav-item> 
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
        activeNav(){
            return this.$store.getters.activeNav;
        }
    },

    updated(){
        
    },

    mounted(){
        var this_ = this;
        $(".navItemSZ .nav-link").click(function(){
            $(".navItemSZ .nav-link").removeClass("active");
            $(this).addClass("active");
        }),
        $("#resumeNav").click(function(){
            this_.$store.commit("chgShowResume", true);
            $(this).addClass("active");
        }),
        this_.observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                const classes = m.target.getAttribute(m.attributeName);
                const id = this_.categories.filter(a=>a.navId==m.target.id)[0].id;
                this.$nextTick(() => {
                    this.onClassChange(classes, id, m.oldValue);
                });
            }
        });
        var navItems = this.$refs.navItem;
        navItems.forEach(element => {
            this_.observer.observe(element, {
                attributes: true,
                attributeOldValue : true,
                attributeFilter: ['class'],
            });
        });
        this_.init();
    },

    methods:{
        init(){
            this.$store.commit("chgActiveNav",'edu');
        },
        rePosition(){
            var windowsH = $(window).innerHeight()/2-100;
            $("#navSide").css('top',windowsH+'px');
            $(window).resize(function() {
                var windowsH = $(window).innerHeight()/2-100;
                $("#navSide").css('top',windowsH+'px');
            });
        },
        onClassChange(classes, id) {
            const classList = classes.split(' ');
            if (classList.includes('active')) {
                this.$store.commit("chgActiveNav", id);
            }
        }
    }
    
}
</script>

<style scoped>

</style>