<template>
  <div id="app">
    <router-link to="/signin" v-if="!$store.state.auth.user">sign in</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('auth/LOAD_STATE_AUTH_CHANGE')
  }
};
</script>


<style>

</style>