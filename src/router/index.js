import { createRouter, createWebHistory } from 'vue-router'
import CarsView from '../views/CarsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cars'
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarsView,
      children:[
        {
          path: ':id',
          name: 'carDetails',
          component: () => import('../views/CarDetails.vue'),
          meta: { requiresAuth: true, admin: true },
          props: true,
        }
      ]

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: false, admin: false },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = false // logic to check if user is authenticated
  if (to.name !== 'login' && !isAuthenticated && to.meta.admin) next({ name: 'login' })
    else next()
});


export default router



