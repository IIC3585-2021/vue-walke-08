import { createStore } from 'vuex'

export default createStore({
  state: {
    filters: {
      diets: [],
      mealType: [],
      min: 0,
      max: 0,
    },
    favorites: []
  },
  mutations: {
    saveFilters(state, payload){
      state.filters = payload
    }
  },
  actions: {
    saveFilters(ctx, payload){
      ctx.commit("saveFilters", payload)
    }
  },
  modules: {
  }
})
