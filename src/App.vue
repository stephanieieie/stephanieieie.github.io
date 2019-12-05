<template>
  <div id="app">
    <introTop></introTop>
    <mapSZ></mapSZ>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import introTop from './components/introTop.vue'
import mapSZ from './components/mapSZ.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld,
    introTop,
    mapSZ
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
