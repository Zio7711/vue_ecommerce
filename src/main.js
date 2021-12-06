import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
// global component
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import store from './store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  //register store
  store,
}).$mount('#app');
