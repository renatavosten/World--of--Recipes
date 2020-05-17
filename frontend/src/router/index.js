import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import(/* webpackChunkName: "pocetna" */ '../components/Pocetna.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import(/* webpackChunkName: "prijava" */ '../views/Prijava.vue')
  },
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import(/* webpackChunkName: "registracija" */ '../views/Registracija.vue')
  },
  {
    path: '/recepti',
    name: 'recepti',
    component: () => import(/* webpackChunkName: "recepti" */ '../views/Recepti.vue')
  },
  {
    path: '/postavke',
    name: 'postavke',
    component: () => import(/* webpackChunkName: "postavke" */ '../views/Postavke.vue')
  },
  {
    path: '/dodajrecept',
    name: 'dodajrecept',
    component: () => import(/* webpackChunkName: "dodajrecept" */ '../views/DodajRecept.vue')
  },
  {
    path: '/mojprofil',
    name: 'mojprofil',
    component: () => import(/* webpackChunkName: "mojprofil" */ '../views/MojProfil.vue')
  },
  {
    path: '/recept/:id',
    props: true,
    name: 'recept-detail',
    component: () => import(/* webpackChunkName: "recept-detail" */ '../views/ReceptDetail.vue')
  },
  {
    path: '/favoriti',
    name: 'favoriti',
    component: () => import(/* webpackChunkName: "favoriti" */ '../views/Favoriti.vue')
  },
  {
    path: '/mojirecepti',
    name: 'mojirecepti',
    component: () => import(/* webpackChunkName: "mojirecepti" */ '../views/MojiRecepti.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
