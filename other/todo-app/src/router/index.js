import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import YapilacakEkle from '../components/YapilacakEkle.vue'
import YapilacakGuncelle from '../views/YapilacakGuncelle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/yapialacakekle',
    name: 'YapilacakEkle',
    component: YapilacakEkle
  },
  {
    path: '/yapialacakguncelle/:id',
    name: 'YapilacakGuncelle',
    component: YapilacakGuncelle,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
