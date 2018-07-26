import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router';
import router from './routes';
import App from './layout';

// import '../assets/css/application';

Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    router,
    render: (h) => h(App),
  });
});
