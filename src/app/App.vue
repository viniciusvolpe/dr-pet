<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
  import navbar from '../shared/components/nav-bar/nav-bar.vue';
  export default {
    components: {
      navbar
    }
  }
</script>

<style scoped>
  body {
    margin-top: 50px
  }
</style>
