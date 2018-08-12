import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import test from './test';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    test
  }
})
