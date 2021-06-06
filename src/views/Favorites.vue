<template>
  <div class="main-container">
    <div class="centrando">
      <div v-for="meal in misfavorites" :key="meal.recipe.label" class="tarjetas">
        <Card :image="meal.recipe.image" :name="meal.recipe.label" :time="meal.recipe.totalTime" :meal="meal.recipe"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
  data(){
    return {
      misfavorites: []
      }
  },
  mounted(){
    this.misfavorites = this.$store.state.favorites;
  },
  components: {
    Card,
  }
}
</script>

