import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';

Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.replace(this, location, resolve, reject);
  } else {
    originReplace.replace(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        show: true,
      },
    },

    {
      path: '/search/:keyword?',
      component: Search,
      meta: {
        show: true,
      },
      name: 'search',
      props: true,
    },

    {
      path: '/register',
      component: Register,
      meta: {
        show: false,
      },
    },

    {
      path: '/login',
      component: Login,
      meta: {
        show: false,
      },
    },

    {
      path: '/detail',
      component: Detail,
      meta: {
        show: true,
      },
    },

    {
      path: '*',
      redirect: '/home',
    },
  ],
});
