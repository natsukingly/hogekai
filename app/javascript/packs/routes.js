import VueRouter from 'vue-router';
import Top from './views/Top';
import Events from './views/Events';
import Login from './views/Login';
import Register from './views/Register';

const routes = [
  {path: '/events', component: Events},
  {path: '/', component: Top},
  {name: 'login', path: '/login', component: Login },
  {name: 'register',path: '/register', component: Register },
];

export default new VueRouter({ mode: 'history', routes });

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       component: () => import('@/views/Home'),
//       children: [
//         {
//           path: '',
//           name: 'home',
//           component: () => import('@/views/HomeGlobal')
//         },
//         {
//           path: 'my-feed',
//           name: 'home-my-feed',
//           component: () => import('@/views/HomeMyFeed')
//         },
//         {
//           path: 'tag/:tag',
//           name: 'home-tag',
//           component: () => import('@/views/HomeTag')
//         }
//       ]
//     },
//     {
//       name: 'login',
//       path: '/login',
//       component: () => import('@/views/Login')
//     },
//     {
//       name: 'register',
//       path: '/register',
//       component: () => import('@/views/Register')
//     },
//     {
//       name: 'settings',
//       path: '/settings',
//       component: () => import('@/views/Settings')
//     },
//     Handle child routes with a default, by giving the name to the
//     child.
//     SO: https://github.com/vuejs/vue-router/issues/777
//     {
//       path: '/@:username',
//       component: () => import('@/views/Profile'),
//       children: [
//         {
//           path: '',
//           name: 'profile',
//           component: () => import('@/views/ProfileArticles')
//         },
//         {
//           name: 'profile-favorites',
//           path: 'favorites',
//           component: () => import('@/views/ProfileFavorited')
//         }
//       ]
//     },
//     {
//       name: 'article',
//       path: '/articles/:slug',
//       component: () => import('@/views/Article'),
//       props: true
//     },
//     {
//       name: 'article-edit',
//       path: '/editor/:slug?',
//       props: true,
//       component: () => import('@/views/ArticleEdit')
//     }
//   ]
// })
