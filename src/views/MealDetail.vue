<template>
    <div class="main2-container" v-if="currentMeal !== null">
        <div class="agarrando">
            <div class="otra">
                <i class="fa fa-arrow-left back" @click="goback"></i>
            </div>
            <h1 class="center inline">{{currentMeal.recipe.label}}</h1>
                <div class="estrellas">
                    <i class="fa fa-star clase" v-if="isfavorite" @click="toggleFavorite"></i>
                    <i class="fa fa-star-o clase" v-else @click="toggleFavorite"></i>
                </div>
            </div>
        <img :src="currentMeal.recipe.image" alt="404" class="center">
        <h2 class="center">
            HealthLabels
        </h2>
        <div v-for="label in currentMeal.recipe.healthLabels" :key="label" class="label">{{label}}</div>
        <div class="los-dos">
            <div class="ingredientes">
                <h2 class="center">Ingredients</h2>
                <ul>
                    <li v-for="ingredient in currentMeal.recipe.ingredientLines" :key="ingredient">{{ingredient}}</li>
                </ul>
            </div>
            <div class="more-labels">
                <h2>Diet Labels</h2>
                <div v-for="label in currentMeal.recipe.dietLabels" :key="label" class="label">{{label}}</div>
                <h2 class="mt">Meal Type</h2>
                <div v-for="label in currentMeal.recipe.mealType" :key="label" class="label label2">{{label}}</div>
                <h2>Calories: {{currentMeal.recipe.calories}}</h2>

            </div>
        </div>
        <h2 class="center">
            <a :href="currentMeal.recipe.url" target="_blank" rel="noopener noreferrer">Recipe here</a>
        </h2>
    </div>
</template>
<script>

export default {
    data(){
        return {
            currentMeal: null,
            isfavorite: false,
        }
    },
    mounted(){
        console.log(this.$store.state.meals);
        this.currentMeal = this.$store.state.meals.find(meal => meal.id === this.$route.params.id) || 
            this.$store.state.favorites.find(meal => meal.id === this.$route.params.id)
        if (this.$store.state.favorites.find(meal => meal.id === this.currentMeal.id)){
            this.isfavorite = true;
        }
    },
    methods: {
        toggleFavorite(){
            if (this.isfavorite){
                this.isfavorite = false;
                this.$store.dispatch("eliminateFavorite", this.currentMeal.id)
            } else {
                this.isfavorite = true;
                this.$store.dispatch("addFavorite", this.currentMeal)
            }
        },
        goback(){
            this.$router.back()
        }
    }
}
</script>
<style>

.back{
    font-size: 200%;
}

.back:hover{
    cursor: pointer;
}

.agarrando{
    display: flex;
}

.otra{
    flex: 1;
}

.inline{
    flex: 3;
}

.estrellas{
    flex: 1;
    text-align: right;
}

.clase{
    font-size: 250%;
    color: gold;
    cursor: pointer;
}

.los-dos{
    display: flex;
}

.ingredientes{
    flex: 1;
}

.more-labels{
    flex: 1;
    text-align: center;
}

.mt{
    margin-top: 50px;
}

.center{
    text-align: center;
    margin: 0 auto;
    padding: 20px;
    display: block;
}

.main2-container {
  width: 90%;
  margin: 0 auto;
  background-color: rgb(224, 83, 83);
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
}

.label{
    margin: 5px 10px;
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    background-color: chartreuse;
    padding: 5px 10px;
}

.label2{
    background-color: rgb(247, 0, 255);
}
</style>
