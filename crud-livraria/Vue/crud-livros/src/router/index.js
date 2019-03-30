// Imports do Vue
import Vue from 'vue'
import Router from 'vue-router'

// Meus imports
import CrudLivros from '@/components/CrudLivros'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'CrudLivros',
    component: CrudLivros
  }]
})

export default router