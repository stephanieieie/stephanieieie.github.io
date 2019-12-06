<template>
  <div :id="id">
    <navSide></navSide>
    <div id="content">
      <introTop></introTop>
      <div id="contentBottom">
        <mapSZ></mapSZ>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import introTop from './components/introTop.vue'
import mapSZ from './components/mapSZ.vue'
import navSide from './components/navSide.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    introTop,
    mapSZ,
    navSide
  },
  data(){
    return {
      id: 'app'
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
