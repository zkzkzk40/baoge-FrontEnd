import { createRouter, createWebHistory } from 'vue-router'
// eslint-disable-next-line no-unused-vars
import login from "@/views/login";
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/manager.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
