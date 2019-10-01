import Vue from 'vue';
import VueRouter from 'vue-router';
import FlightSelectionPage from '@/components/FlightSelectionPage.vue';
import SplashScreen from '@/components/SplashScreen.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/flights/', component: FlightSelectionPage }
];


export const router = new VueRouter({
  routes
});