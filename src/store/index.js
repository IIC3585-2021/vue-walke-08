import { createStore } from 'vuex'

export default createStore({
  state: {
    filters: {
      ingredients: [],
      nutrients: [],
      calorias: [],
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
