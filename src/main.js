import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
// global component
import TypeNav from '@/components/TypeNav';
import store from './store';
import '@/mock/mockServe';

Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  //register store
  store,
}).$mount('#app');
