import Vue from 'vue';
import VueRouter from 'vue-router';
import FlightSelectionPage from '@/components/flights/FlightSelectionPage.vue';
import FlightDetailsPage from '@/components/flights/FlightDetailsPage.vue';
import SplashScreen from '@/components/SplashScreen.vue';
import CustomerPage from '@/components/customer/CustomerPage.vue';
import FoodPage from '@/components/food/FoodPage.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/flights/', component: FlightSelectionPage },
  { path: '/flights/:flightId', component: FlightDetailsPage },
  {path: '/customerInfo', component: CustomerPage},
  {path: '/food', component: FoodPage}
];


export default new VueRouter({
  routes
});