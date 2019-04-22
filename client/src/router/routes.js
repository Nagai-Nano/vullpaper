export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/images',
    name: 'images',
    props: route => ({ q: route.query.q }),
    component: () => import('@/views/Images'),
    beforeEnter: (to, from, next) => {
      if (!to.query.q) return next({ name: 'error', params: { code: 404 } });
      next();
    }
  },
  {
    path: '/image/:id',
    name: 'image',
    props: true,
    component: () => import('@/views/Image'),
    beforeEnter: (to, from, next) => {
      if (isNaN(to.params.id) || +to.params.id < 1)
        return next({ name: 'error', params: { code: 404 } });

      next();
    }
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/Tags')
  },
  {
    path: '/error',
    name: 'error',
    props: true,
    component: () => import('@/views/Error')
  }
];
