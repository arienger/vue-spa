import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// lazy loading:
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/login', component: Login},
    {path: '/category/:id', name: 'category', component: Category},
    {path: '/', redirect: '/login'},
    {path: '*', component: NotFound}
  ]
})

router.beforeEach((to, from, next) => {
  if (!router.app.$store.state.isAuthenticated) {
    if (to.fullPath === '/login') {
      next()
    } else {
      console.log('not auth, redirect to login')
      next('/login')
    }
  } else {
    next()
  }
})

export default router
