<template>
  <div>
    <Header />

    <router-view></router-view>
    <!-- show it when at HOME page and search page -->
    <!-- hide it when at login and register -->
    <Footer v-show="$route.meta.show === true" />
  </div>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';

  export default {
    name: '',
    components: {
      Header,
      Footer,
    },

    mounted() {
      this.$store.dispatch('categoryList');
      if (this.$route.path !== '/home') {
        this.show = false;
      }
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
