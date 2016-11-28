
import login from '../shared/components/login/login.vue';
import menu from '../shared/components/menu/menu.vue';
import App from '../app/App.vue';
import animais from '../app/animais/animais-form.vue';
import VueRouter from 'vue-router';

const routes = [
  { path: '/login', component: login },
  { path: '/', component: menu, children: [
    { path: '/animais', component: animais }
  ]}
]

const router = new VueRouter({
  routes
});

export default router;