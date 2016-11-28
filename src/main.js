import Vue from 'vue';
import App from './app/App.vue';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './config/route.conf.js'

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('body');

