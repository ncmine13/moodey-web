<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass-loader">
  @import './styles/_reset.scss';
  @import './styles/settings.scss';
  body {
    background-color: $blue;
    padding: 0 5%;
    textarea:focus, input:focus {
      outline: none;
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    line-height: 1.5;
  }
</style>
