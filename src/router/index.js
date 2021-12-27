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

  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;

  if (token) {
    // if user is logged in, and still want to go to login page: FORBIDDEN, redirect to home page
    if (to.path === '/login') {
      next('/');
    } else {
      // go to other page expect login
      // if userInfo exists, proceed
      if (name) {
        next();
      } else {
        try {
          // if token exist but there is no userInfo, re-sending request to get userInfo
          await store.dispatch('getUserInfo');
          next();
        } catch (error) {
          // if token exist, but request fails, clear the token and logout, and redirect to login page
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
