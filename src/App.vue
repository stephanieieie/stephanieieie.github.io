<template>
  <div :id="id">
    <introTop></introTop>
    <div id="bottom">
      <navSide></navSide>
      <div id="content">
        <mapSZ></mapSZ>
        <infoSZ></infoSZ>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import introTop from './components/introTop.vue'
import mapSZ from './components/mapSZ.vue'
import navSide from './components/navSide.vue'
import infoSZ from './components/infoSZ.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    introTop,
    mapSZ,
    infoSZ,
    navSide
  },
  data(){
    return {
      id: 'app'
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
      var h = $(window).height();
      $("#introTop").css("height",h);
      $("#bottom").css("height",h);

      $(window).resize(function(){
        var h = $(window).height();
        $("#introTop").css("height",h);
        $("#bottom").css("height",h);
        var h = $("#mapSZ").height();
        var w = $("#mapSZ").width();
        if (h>w) {
            var l = w*0.8
        } else {
            var l = h*0.8
        }
        $("#mapCon").css("height",l);
        $("#mapCon").css("width",l);
        $(".infoPart").css("height",l);
        $(".infoPart").css("width",l);
      });
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
