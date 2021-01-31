import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/Admin";
import UserProfile from "../views/UserProfile";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const isAdmin = true;
  const requireAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requireAdmin && !isAdmin) next({ name: 'Home' })
  else next();
})

export default router
