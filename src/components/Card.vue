<template>
  <div class="card" @click="selectMeal">
    <img :src="image" :alt="meal">
    <div class="meal-name">
      <span>{{ name.toUpperCase() }}</span>
      <span v-if="time > 0">{{time}}m</span>
    </div>
  </div>
</template>

<script>


export default {
  props: [
    "image",
    "time",
    "name",
    "meal",
  ],
  data() {
    return {
    }
  },
  methods: {
    selectMeal() {
      this.$router.push({name: 'MealDetail', params: {id: this.$props.name.replace(/ /g,"")}})
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
    border: 2px solid #191D8A;
    cursor: pointer;
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
