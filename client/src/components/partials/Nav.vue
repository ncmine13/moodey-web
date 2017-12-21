<template>
  <div class="nav-wrapper">
    <div><img class="smile-logo" src="../../assets/smilez.png"/></div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="sass-loader">
  @import "../../styles/settings.scss";
  .nav-wrapper {
    position: fixed;
    left: 0;
    width: 100%;
    background-color: $red;
    .smile-logo {
      left: 2%;
      max-width: 40px;
      height: auto;
    }
  }
</style>