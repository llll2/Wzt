import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie/MoviePage.vue'),
    redirect:'/movie/relesed',
    children:[
      {
        path:'relesed',
        name:'relesed',
        component:() => import(/* webpackChunkName: "about" */ '../views/Movie/pages/Relesed.vue'),
      },
      {
        path:'upcoming',
        name:'upcoming',
        component:() => import(/* webpackChunkName: "about" */ '../views/Movie/pages/Upcoming/Upcoming.vue')
      },
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine/MinePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginPage.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail/DetailPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
