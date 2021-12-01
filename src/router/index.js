import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },

    {
      path: '/search',
      component: Search,
    },

    {
      path: '/register',
      component: Register,
    },

    {
      path: '/login',
      component: Login,
    },

    {
      path: '*',
      redirect: '/home',
    },
  ],
});
