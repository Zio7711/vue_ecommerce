import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';

export default [
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
    path: '/detail/:skuid',
    component: Detail,
    meta: {
      show: true,
    },
  },

  {
    path: '*',
    redirect: '/home',
  },
];