import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import store from './store';
import router from './routes';
import axios from './axios/setup';
import App from './layout';

import ApiService from './common/api.service'
import { CHECK_AUTH } from './store/action-types'

// import '../assets/css/application';

Vue.use(VueRouter);
ApiService.init()

router.beforeEach(
  (to, from, next) => {
    return Promise
      .all([store.dispatch(CHECK_AUTH)])
      .then(next)
  }
)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#application',
    store,
    router,
    render: (h) => h(App),
  });
});
