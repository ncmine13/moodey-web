<template>
  <div id="app">
    <register-component></register-component>
  </div>
</template>

<script>
import registerComponent from './Register'
export default {
  name: 'app',
  components: {
    registerComponent
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
