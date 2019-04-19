import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import routes from './routes';

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
