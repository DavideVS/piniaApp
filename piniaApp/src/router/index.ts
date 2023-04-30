import ClientsLayout from '@/clients/layout/ClientsLayout.vue'
import ClientPage from '@/clients/pages/ClientPage.vue'
import ListPage from '@/clients/pages/ListPage.vue'
import CounterPage from '@/counter/pages/CounterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: CounterPage
    },
    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'list', },
      children: [
        { path: 'list', name: 'list', component: ListPage },
        { path: '/clients/:id', name: 'client-id', component: ClientPage },
      ]
    }
  ]
})

export default router
