import { createRouter, createWebHistory } from 'vue-router'
import Meals from '../views/Meals'
import MealDetail from '../views/MealDetail'
import Favorites from '../views/Favorites'

const routes = [
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/meals/:id',
    name: 'MealDetail',
    component: MealDetail
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/',
    redirect: '/meals'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
