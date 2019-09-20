<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Travel</span>
        <span class="font-weight-light">Vuetify</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <SearchForm :submitAction="submitSearchForm" />
      <FlightsTable :flightInfo="flightInfo"/>
    </v-content>
  </v-app>
</template>
<script>
import SearchForm from "./components/SearchForm";
import FlightsTable from "./components/FlightsTable";
import {getFilteredFlights, getAllFlights} from "./service/flightService";

export default {
  name: "App",
  components: {
    SearchForm,
    FlightsTable
  },
  data: () => ({
      flightInfo:getAllFlights()
  }),
  methods: {
    submitSearchForm(form) {
      this.flightInfo = getFilteredFlights(form.fromCity, form.toCity);
    }
  }
};
</script>
