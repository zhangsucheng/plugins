<template>
  <div id="app">
    <canvas-plate></canvas-plate>
  </div>
</template>

<script>
import canvasPlate from './components/canvasPlate'

export default {
  name: 'app',
  components: {
    canvasPlate
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
