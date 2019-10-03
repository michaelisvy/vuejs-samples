<template>
  <v-card class="mx-auto" max-width="800">
    <div>Airlines: {{this.flight.airline}}</div>
    <div>Departure: {{this.flight.departureDate}}</div>
    <div>Return: {{this.flight.returnDate}}</div>
    <div>From: {{this.flight.from}}</div>
    <div>To: {{this.flight.to}}</div>
  </v-card>
</template>

<script>
import { getFlightById } from "@/service/flightService";
export default {
  props: {},
  data: vm => ({
    flight: Object
  }),
  mounted() {
    this.flight = getFlightById(this.$route.params.flightId);
  },
  methods: {}
};
</script>
