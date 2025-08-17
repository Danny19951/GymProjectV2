import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*aqui encuentras las rutas de navegacion*/
    {

      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/contador.vue')
      
    },
    {
      path: '/ListaObjeto',
      name: 'ListaObjeto',
      component: () => import('../modules/listaDeTareas/ListaObjeto.vue')

    },
    {
      path: '/Registroview',
      name: 'Registroview',
      component: () => import('../modules/Registro/Views/Registroview.vue')

    }

  ],
})

export default router
