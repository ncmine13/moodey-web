<template>
  <div class="registration__wrapper">
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email"/>
    <input type="password" name="password" placeholder="password" v-model="password"/>
    <button v-on:click="register()">Register</button>
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style lang="sass-loader">
  @import '../styles/settings.scss';
  .registration {
    &__wrapper {
      background-color: white;
      color: $purple;
    }
  }

</style>