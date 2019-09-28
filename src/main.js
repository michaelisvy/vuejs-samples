import Vue from 'vue';
import App from './App.vue';
import SearchPage from './components/SearchPage.vue';
import SplashScreen from './components/SplashScreen.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/flights/', component: SearchPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
