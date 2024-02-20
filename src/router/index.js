// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DetalhesWorkshop from '@/components/DetalhesWorkshop.vue'
import ListaPresenca from '@/components/ListaPresenca.vue'

const routes = [
  { path: '/workshop/:id', component: DetalhesWorkshop, name: 'detalhes-workshop' },
  { path: '/', component: ListaPresenca, name: 'lista-presenca' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
