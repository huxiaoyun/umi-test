import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/dagEditor',
      component: '@/pages/dagEditor',
    },
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
