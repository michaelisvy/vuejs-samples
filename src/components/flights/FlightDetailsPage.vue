<template>
  <v-card class="mx-auto" max-width="800">
    <div>Airlines: {{ flight.airline }}</div>
    <div>Departure: {{ flight.departureDate }}</div>
    <div>Return: {{ flight.returnDate }}</div>
    <div>From: {{ flight.from }}</div>
    <div>To: {{ flight.to }}</div>
  </v-card>
</template>

<script>
import { getFlightById } from "@/service/flightService";
export default {
  props: {},
  data: function() {
    return {
    flight: Object
    };
  },
  mounted() {
    this.flight = getFlightById(this.$route.params.flightId);
  },
  methods: {}
};
</script>
