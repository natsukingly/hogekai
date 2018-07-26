import VueRouter from 'vue-router';
import Top from './components/shared/top';

const routes = [{
  path: '/', component: Top,
}];

export default new VueRouter({ routes });
