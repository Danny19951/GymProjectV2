import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*aqui encuentras las rutas de navegacion*/
    {

      path: '/contador',
      name: 'contador',
      component: () => import('../components/contador.vue')
      
    },
    {
      path: '/ListaObjeto',
      name: 'ListaObjeto',
      component: () => import('../components/ListaObjeto.vue')

    }

  ],
})

export default router
