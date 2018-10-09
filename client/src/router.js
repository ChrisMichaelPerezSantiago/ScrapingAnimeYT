import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import UserHome from './views/UserHome.vue'
import store from './store'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to , from , next){
        store.dispatch('auth/authenticate').then(() =>{
          next('/userhome');
        }).catch((e) =>{
          next('/login');
        });
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userhome',
      name: 'userhome',
      component: UserHome,
      beforeEnter(to , from , next){
        store.dispatch('auth/authenticate').then(() =>{
          next()
        }).catch((e) =>{
          next('/login');
        });
      },
    }
  ]
})
