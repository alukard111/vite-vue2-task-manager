<template>
  <div id="app">
    <router-link to="/signin">sign in</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('loadStateAuthChange')
  }
};
</script>


<style>

</style>