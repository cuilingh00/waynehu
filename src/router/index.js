import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/mainPage';
import About from '@/components/aboutPage';
import blog from '@/components/blogPage';
import work from '@/components/workPage';
import contact from '@/components/contactPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    }, {
      path: '/about',
      name: 'about',
      component: About,
    }, {
      path: '/blog',
      name: 'blog',
      component: blog,
    }, {
      path: '/work',
      name: 'work',
      component: work,
    }, {
      path: '/contact',
      name: 'contact',
      component: contact,
    }
  ],
});
