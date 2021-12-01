<template>
  <div>
    <Header />

    I am the root
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import Header from './components/Header';

  export default {
    name: '',
    components: {
      Header,
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
    margin-top: 60px;
  }
</style>
