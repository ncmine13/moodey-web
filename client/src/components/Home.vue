<template>
  <div>
    <nav-component></nav-component>
    <div> {{welcome}} </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navComponent from './partials/Nav'
import footerComponent from './partials/Footer'

export default {
  name: 'Home',
  data () {
    return {
      welcome: 'Welcome home'
    }
  },
  components: {
    navComponent,
    footerComponent
  }
}
</script>

<style lang="sass-loader">
</style>