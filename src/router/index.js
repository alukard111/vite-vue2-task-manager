import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/signin',
    name: 'AlSignIn',
    component: () => import('../views/AlSignIn.vue')
  },
  {
    path: '/registration',
    name: 'AlRegistration',
    component: () => import('../views/AlRegistration.vue')
  },
  {
    path: '/app',
    name: 'AlAppMain',
    component: () => import('../views/AlAppMain.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
