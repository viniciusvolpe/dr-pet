import Vue from 'vue';
import App from './app/App.vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: 'body',
  render: h => h(App)
});
