import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';

export default [
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: {
      show: true,
    },
  },
  {
    path: '/trade',
    name: 'trade',
    component: Trade,
    meta: {
      show: true,
    },
  },

  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShopCart,
    meta: {
      show: true,
    },
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
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
