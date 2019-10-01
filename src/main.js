import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import FlightSelectionPage from '@/components/FlightSelectionPage.vue';
import SplashScreen from '@/components/SplashScreen.vue';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/flights/', component: FlightSelectionPage }
];

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App), 
}).$mount('#app')
