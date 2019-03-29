// Imports do Vue
import Vue from 'vue'
import Router from 'vue-router'

// Meus imports
import Hello from '@/components/Hello'
import CrudLivros from '@/components/CrudLivros'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/crud-livros',
    name: 'CrudLivros',
    component: CrudLivros,
  },
  ]
})

export default router