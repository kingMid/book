import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Mine from '../views/Mine.vue'
import DailyBook from '../views/DailyBook.vue'
import Mon from '../views/Mon.vue'
import Year from '../views/Year.vue'
import All from '../views/All.vue'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify,
    children:[
      {
        path:'mon',
        name:'Mon',
        component:Mon
      },
      {
        path:'year',
        name:'Year',
        component:Year
      },
      {
        path:'all',
        name:'All',
        component:All
      }
    ]
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/dailybook',
    name: 'DailyBook',
    component: DailyBook
  }

]

const router = new VueRouter({
  routes
})

export default router
