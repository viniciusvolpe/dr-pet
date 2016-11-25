
import login from '../shared/components/login/login.vue';

const routes = [
  { path: '/login', component: login }
]

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');