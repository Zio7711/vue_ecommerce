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
import { Button, MessageBox } from 'element-ui';

import * as API from '@/api';

import VueLazyload from 'vue-lazyload';
import Anais from '@/assets/lazyload.jpg';

import '@/plugins/validate';

Vue.use(VueLazyload, {
  // default image
  loading: Anais,
});

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

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
