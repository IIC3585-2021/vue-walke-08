<template>
  <Header />
  <div class="top-space"></div>
  <router-view/>
</template>

<script>
import Header from "./components/Header.vue";
import Card from './components/Card.vue';
import Fiters from './components/Fiters.vue'

export default {
  components: {
    Header,
    Card,
    Fiters
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-space {
  height: 50px;
}

body {
  padding: 0;
  margin: 0;
  background-color: #2e8a0b;
  background-image: url("https://www.transparenttextures.com/patterns/food.png");
}
</style>
