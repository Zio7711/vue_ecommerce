import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
// global component
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import store from './store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';

import * as API from '@/api';

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  //register store
  store,

  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount('#app');
