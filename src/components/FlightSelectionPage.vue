<template>
  <v-card class="mx-auto" max-width="800">
    <v-img class="white--text" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <FlightSearchForm :submit-action="submitSearchForm" @submit="submitSearchForm"/>
      <FlightsTable :flight-list="flightList" />
    </v-img>
  </v-card>
</template>
<script>
import FlightSearchForm from "./FlightSearchForm";
import FlightsTable from "./FlightsTable";
import { getFilteredFlights} from "@/service/flightService";

export default {
  name: "SearchPage",
  components: {
    FlightSearchForm,
    FlightsTable
  },
  data: function() {
    return {
      flightList: Object
    };
  },
  created() {
    this.flightList = getFilteredFlights(
      this.$route.query.fromCity,
      this.$route.query.toCity,
      "",
      ""
    );
  },
  methods: {
    submitSearchForm(form) {
      this.flightList = getFilteredFlights(
        form.fromCity,
        form.toCity,
        form.departureDate,
        form.returnDate
      );
    }
  }
};
</script>
