<template>
  <div id="app">
    <mineMap></mineMap>
  </div>
</template>

<script>
import mineMap from './components/mineMap.vue'

export default {
  name: 'App',
  components: {
    mineMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
