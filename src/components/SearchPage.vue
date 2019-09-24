<template>
  <v-card class="mx-auto" max-width="800">
          <v-img class="white--text" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <SearchForm :submit-action="submitSearchForm" />
            <FlightsTable :flight-info="flightInfo" />
          </v-img>
        </v-card>
</template>
<script>
import SearchForm from "./SearchForm";
import FlightsTable from "./FlightsTable";
import { getFilteredFlights, getAllFlights } from "../service/flightService";

export default {
  name: "SearchPage",
  components: {
    SearchForm,
    FlightsTable
  },
  data: () => ({
    flightInfo: getAllFlights()
  }),
  methods: {
    submitSearchForm(form) {
      this.flightInfo = getFilteredFlights(
        form.fromCity,
        form.toCity,
        form.departureDate,
        form.returnDate
      );
    }
  }
};
</script>
