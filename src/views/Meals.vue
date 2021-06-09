<template>
  <div class="main-container">
    <div class="filter" v-if="isSearching">
      <Fiters />
    </div>
    <div class="no-main-container">
      <div class="overlay-content" v-if="!isSearching">
        <form @submit="searchHandler">
          <input type="text" placeholder="Search a recipe for your meal" name="search" v-model="input">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
      <div v-else>
        <div class="overlay-content2">
        <form @submit="searchHandler">
          <input type="text" placeholder="Search a recipe for your meal" name="search" v-model="input">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        </div>
        <div v-if="loading">
          <Loader/>
        </div>
        <div class="centrando">
          <div v-for="meal in filterMeals" :key="meal.recipe.label" class="tarjetas">
            <Card :image="meal.recipe.image" :name="meal.recipe.label" :time="meal.recipe.totalTime" :meal="meal.recipe"/>
          </div>
        </div>
        <div v-if="meals.length === 0 && !loading">
          404 Not Found
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Fiters from '../components/Fiters.vue'
import Loader from '../components/Loader.vue'
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
  mounted(){
    if (this.$store.state.meals.length > 0){
      this.meals = this.$store.state.meals
      this.isSearching = true;
    }
  },
  computed: {
    filterMeals(){
      console.log("acaaaaaaaaaa:",this.$store.state.filters)
      let filterMeals = [...this.meals];
      const {min,max,diets, mealType} = this.$store.state.filters;
      if (diets.length > 0){
        filterMeals = this.meals.filter(meal => {
          for (const diet of diets){
            console.log("sdfasdf:", meal.recipe.dietLabels[0])
            console.log("name: ", diet.name)
            if (meal.recipe.dietLabels[0] && diet.name === meal.recipe.dietLabels[0].replace("-","_").toLowerCase()){
              return true;
            }
          }
        })
      }
      if (mealType.length > 0){
        filterMeals = filterMeals.filter(meal => {
          for (const type of mealType){
            
            if (meal.recipe.mealType && meal.recipe.mealType[0].toLowerCase().includes(type.name.toLowerCase())){
              console.log("type: ", type)
              console.log("fdsafa: ", meal.recipe.mealType[0])
              return true;
            }
          }
        })
      }
      filterMeals = filterMeals.filter(meal => meal.recipe.calories >= min && meal.recipe.calories <= max);
      return filterMeals
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
        this.$store.dispatch("saveMeals", this.meals);
      })
    }
  },
  components: {
    Card,
    Fiters,
    Loader,
  }
}
</script>

<style>

.centrando{
  text-align: center;
}

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
  max-width: 80%;
  width: 80%;
  margin: 0 auto;
  background-color: rgb(224, 83, 83);
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