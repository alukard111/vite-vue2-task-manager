<template>
  <div>
    <div> {{ count }} </div>
    <div class="w-20 h-20 bg-red-300"></div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    count() {
      return console.log(this.$store.state.count)
    }
  }
};
</script>

<style scoped>

</style>