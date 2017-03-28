import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Home'
import Login from '../views/Login';
import Register from '../views/Register';
import Settings from '../views/Settings/Settings';
import Article from '../views/Article/Article';
import Profile from '../views/Profile/Profile';
import ProfileFavorites from '../views/Profile/ProfileFavorites';
import ProfileArticles from '../views/Profile/ProfileArticles';
import Editor from '../views/Editor/Editor';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    // {
    //   path: '/profile',
    //   name: 'Profile',
    //   component: Profile,
    //   children: [
    //     {
    //       path: ':username',
    //       component: ProfileArticles
    //     },
    //     {
    //       path: ':username/favorites',
    //       component: ProfileFavorites
    //     }
    //   ]
    // },
    {
      path: '/@:username/article/:id',
      component: Article
    },
    {
      path: '/@:username',
      component: Profile
    },
    {
      path: '/@:username/favorites',
      component: ProfileFavorites
    },
    {
      path: '/editor',
      component: Editor
    },
    {
      path: '/editor/:slug',
      component: Editor
    }
  ]
})
