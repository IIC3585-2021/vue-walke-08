<template>
  <div class="home">
    <h1>Esto se muestra</h1>
  </div>
  <div class="overlay-content" v-if="!isSearching">
    <form @submit="searchHandler">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
  <div v-else>Mostrar cards</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isSearching: false,
      input: ''
    }
  },
  methods: {
    searchHandler() {
      this.isSearching = true
      console.log(process.env.VUE_APP_VARIABLE)
    }
  }
}
</script>

<style>
.overlay-content {
  display: grid;
  place-items: center;
  width: 100%;
  height: 70vh;
}

.overlay-content input[type=text] {
  border: 1px solid rgba(0,0,0,0.2);
  padding: 15px;
  font-size: 17px;
  background: white;
  border-radius: 5px;
  width: 500px;
}

.overlay-content input[type=text]:hover {
  background: #f1f1f1;
}

.overlay-content input[type=text]:focus {
  border: none;
}

.overlay-content button {
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  margin-left: 4px;
}

.overlay-content button:hover {
  background: #bbb;
}
</style>