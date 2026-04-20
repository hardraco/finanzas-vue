import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/categorias',
    component: () => import('../views/CategoriasView.vue'),
    meta: { requiresAuth: true }
  },
  {
  path: '/transacciones',
  component: () => import('../views/TransaccionesView.vue'),
  meta: { requiresAuth: true }
},
{
  path: '/transaccion/:id',
  component: () => import('../views/TransaccionDetail.vue'),
  meta: { requiresAuth: true }
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Protección de rutas
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next('/')
  } else {
    next()
  }
})

export default router