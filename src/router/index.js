import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

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

let router = new VueRouter({
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  // to: the url you want to redirect to
  // from: the address you redirect from
  // next: passing function

  // next();

  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  if (token) {
    if (to.path === '/login') {
      next('/');
    } else {
      // go to other page expect login
      if (name) {
        next();
      } else {
        try {
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          await store.dispatch('userLogout');
          next('/login');
        }
      }
    }
  } else {
    next();
  }
});

export default router;
