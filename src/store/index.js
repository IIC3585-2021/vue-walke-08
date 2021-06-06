import { createStore } from 'vuex'

export default createStore({
  state: {
    filters: {
      diets: [],
      mealType: [],
      min: 0,
      max: 5000,
    },
    favorites: [],
    meals: [],
  },
  mutations: {
    saveFilters(state, payload){
      state.filters = payload
    },
    saveMeals(state, payload){
      const meals = payload.map(meal => ({...meal,id: meal.recipe.label.replace(/ /g,"")}))
      state.meals = meals
    },
    addFavorite(state, payload){
      state.favorites.push(payload)
    },
    eliminateFavorite(state, payload){
      state.favorites = state.favorites.filter(favorite => favorite.id !== payload)
    }
  },
  actions: {
    saveFilters(ctx, payload){
      ctx.commit("saveFilters", payload)
    },
    saveMeals(ctx, payload){
      ctx.commit("saveMeals", payload)
    },
    addFavorite(ctx, payload){
      ctx.commit("addFavorite", payload)
    },
    eliminateFavorite(ctx, payload){
      ctx.commit("eliminateFavorite", payload)
    }
  },
  modules: {
  }
})
