<template>
  <div class="card" @click="selectMeal">
    <img :src="image" :alt="meal">
    <div class="meal-name">
      <span>{{ meal.toUpperCase() }}</span>
      <span>45m</span>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      image: "https://europe.wordcamp.org/2015/files/2015/06/Good_Food_Display_-_NCI_Visuals_Online.jpg",
      meal: 'comida'
    }
  },
  methods: {
    selectMeal() {
      console.log('seleccionada!!')
    }
  }
}
</script>

<style>
  .card {
    font-family: 'Open Sans', sans-serif;
    color: #000;
    height: 280px;
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #eee;
    border: 1px solid rgba(29, 61, 201, 0.5);
    margin: 15px;
    box-shadow: 4px 2px 3px 2px rgba(0, 0, 0, 0.3);
  }

  .card:hover {
    border: 2px solid rgba(29, 61, 201, 1);
  }

  .card img {
    height: 230px;
    width: 100%;
    margin: 0;
  }

  .meal-name {
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
    font-size: 18px;
  }

  .meal-name span {
    padding: 0 10px;
  }
</style>
