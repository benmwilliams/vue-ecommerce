import Vue from 'vue';
import Router from 'vue-router';

import Cart from '@/components/pages/Cart';
import Home from '@/components/pages/Home';

import Edit from '@/components/pages/admin/Edit';
import Index from '@/components/pages/admin/Index';
import New from '@/components/pages/admin/New';
import Products from '@/components/pages/admin/Products';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Products',
          component: Products,
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
