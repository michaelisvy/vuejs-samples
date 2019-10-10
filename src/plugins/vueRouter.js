import Vue from 'vue';
import VueRouter from 'vue-router';
import FlightSelectionPage from '@/components/flights/FlightSelectionPage.vue';
import FlightDetailsPage from '@/components/flights/FlightDetailsPage.vue';
import SplashScreen from '@/components/SplashScreen.vue';
import PersonalInfoPage from '@/components/personalInfo/PersonalInfoPage.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/flights/', component: FlightSelectionPage },
  { path: '/flights/:flightId', component: FlightDetailsPage },
  {path: '/personalInfo', component: PersonalInfoPage}
];


export const router = new VueRouter({
  routes
});