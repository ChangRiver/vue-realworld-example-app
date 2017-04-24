import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login';
import Register from '../views/Register';
import Settings from '../views/Settings/Settings';
import Article from '../views/Article/Article';
import Profile from '../views/Profile/Profile';
import ProfileFavorites from '../views/Profile/ProfileFavorites';
import Editor from '../views/Editor/Editor';

Vue.use(Router);

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {
        requireAuth: true 
      },
      component: Settings
    },
    {
      path: '/article/:id',
      name: 'article',
      meta: {
        requireAuth: true 
      },
      component: Article
    },
    {
      path: '/@:username',
      meta: {
        requireAuth: true 
      },
      component: Profile
    },
    {
      path: '/@:username/favorites',
      meta: {
        requireAuth: true 
      },
      component: ProfileFavorites
    },
    {
      path: '/editor',
      meta: {
        requireAuth: true 
      },
      component: Editor
    },
    {
      path: '/editor/:slug',
      meta: {
        requireAuth: true 
      },
      component: Editor
    },
    {
      path: '/editor/article/:id',
      redirect: '/article/:id'
    },
    {
      path: '/@:username/article/:id',
      redirect: '/article/:id'
    }
  ];

const router = new Router({
  mode: 'history',
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(r => r.meta.requireAuth)) {
    if(localStorage.getItem('jwt')) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

export default router;
