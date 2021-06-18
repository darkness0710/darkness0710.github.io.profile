<template>
  <div id="app">
    <Nav />
    <router-view/>
    <footer class="footer">
      <div class="container">
        <div class="copyright pull-center">
          ©2021, made with <i class="material-icons">favorite</i> by Darkness0710
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
  }
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
