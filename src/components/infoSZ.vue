<template>
    <div :id="id">
        <template v-for="(i,index) in categories">
            <div :id="i.id" :key="index" class="infoPart">
                <h1 class="infoTitle">{{i.label}}</h1>
                <component class="infoContent" v-bind:is="i.id" v-if="i.id"/>
            </div>
        </template>
        <el-dialog
            id="resumeDiag"
            :visible.sync="showResume"
            width="60%"
            height="100%"
            :modal="false"
            :lock-scroll="true"
            :modal-append-to-body="false"
            :append-to-body="false"
            :close-on-click-modal="false"
            @close="closeResume">
            <div slot="title" class="header-title">
                <span>Resume</span>
            </div>
            <div class="dialogCont">
                <iframe src="/YunqiZhang_resume.pdf"></iframe>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import edu from './infoParts/edu.vue'
import exp from './infoParts/exp.vue'
import port from './infoParts/port.vue'
import int from './infoParts/int.vue'

export default {
    name: 'infoSZ',
    components: {
        edu,
        exp,
        port,
        int
    },
    data(){
        return {
            id: 'infoSZ',
            resumeLink: "~@/assets/img/scrollDown.png"
        }
    },
    
    computed: {
        categories(){
            return this.$store.getters.categories;
        },
        showResume(){
            return this.$store.getters.showResume;
        },
        showPortImg(){
            return this.$store.getters.showPortImg;
        }
    },

    mounted(){
        this.init();
    },

    methods:{
        init(){
            this.size();
        },
        size(){
            var h = $("#infoSZ").height();
            var w = $("#infoSZ").width();
            if (h>w) {
                var l = w*0.8
            } else {
                var l = h*0.8
            }
        },
        closeResume(){
            this.$store.commit("chgShowResume", false);
            $("#resumeNav").removeClass("active");
        }
    }
}
</script>

<style scoped>

</style>