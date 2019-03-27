/*import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})*/

//
// Imports do Vue
import Vue from 'vue'
import Router from 'vue-router'

// Imports de terceiros
import Auth from '@okta/okta-vue'

// Meus imports
import Hello from '@/components/Hello'
import CrudLivros from '@/components/CrudLivros'

Vue.use(Auth, {
  issuer: 'https://dev-616534.okta.com/oauth2/default',
  client_id: '{0oae2pgdwIBnLREVL356}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

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
    /*meta: {
      requiresAuth: true
    }*/
  },
  {
  	path: '/implicit/callback',
  	component: Auth.handleCallback()
	},
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router