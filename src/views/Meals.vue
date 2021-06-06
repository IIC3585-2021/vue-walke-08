<template>
  <div class="main-container">
    <div class="filter" v-if="isSearching">
      <Fiters />
    </div>
    <div class="no-main-container">
      <div class="overlay-content" v-if="!isSearching">
        <form @submit="searchHandler">
          <input type="text" placeholder="Search.." name="search" v-model="input">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div v-else>
        <div class="overlay-content2">
        <form @submit="searchHandler">
          <input type="text" placeholder="Search.." name="search" v-model="input">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
        <div v-for="meal in meals" :key="meal.recipe.label" class="tarjetas">
          <Card :image="meal.recipe.image" :name="meal.recipe.label" :time="meal.recipe.totalTime" :meal="meal.recipe"/>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fiters from '../components/Fiters.vue'
export default {
  name: 'Home',
  data() {
    return {
      isSearching: false,
      input: '',
      loading: false,
      meals: [],
    }
  },
  methods: {
    searchHandler(e) {
      e.preventDefault()
      this.isSearching = true
      this.loading = true
      console.log(process.env.VUE_APP_VARIABLE)
      const app_id = process.env.VUE_APP_API_ID
      const app_key = process.env.VUE_APP_API_KEY
      fetch(`https://api.edamam.com/search?q=${this.input}&app_id=${app_id}&app_key=${app_key}`)
      .then(response => response.json())
      .then(data => {
        this.loading = false;
        this.meals = data.hits;
      })
    }
  },
  components: {
    Card,
    Fiters,
  }
}
</script>

<style>

.tarjetas {
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
}

.filter {
  flex: 1;
  border-right: 3px solid black;
  background-color: #ccc;
}

.main-container {
  display: flex;
  width: 90%;
  margin: 0 auto;
  background-color: #eee;
  min-height: 100vh;
}

.no-main-container {
  flex: 5;
}

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

.overlay-content2 {
  display: grid;
  place-items: center;
  width: 100%;
  margin: 10px 0;
}

.overlay-content2 input[type=text] {
  border: 1px solid rgba(0,0,0,0.2);
  padding: 15px;
  font-size: 17px;
  background: white;
  border-radius: 5px;
  width: 500px;
}

.overlay-content2 input[type=text]:hover {
  background: #f1f1f1;
}

.overlay-content2 input[type=text]:focus {
  border: none;
}

.overlay-content2 button {
  padding: 15px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  margin-left: 4px;
}

.overlay-content2 button:hover {
  background: #bbb;
}
</style>