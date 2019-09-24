<template>
  <v-app>
    <v-app-bar app color="yellow">
      <v-toolbar-title class="headline text-uppercase indigo--text">
        <span>Travel</span>
        <span class="font-weight-light">ify</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/">Home
        </v-btn>
        <v-btn text to="/search">Search Flights
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import SearchPage from "./components/SearchPage";

export default {
  name: "App",
  components: {
  },
  data: () => ({
   
  }),
  methods: {
  }
};
</script>
