<template>
  <v-data-table
    :headers="flightList.headers"
    :items="flightList.flights"
    :items-per-page="5"
    item-key="id"
    class="elevation-1"
    @click:row="displayFlightDetails"
  />
</template>

<script>
export default {
  props: {
    flightList: {
      required: true,
      type: Object
    }
  },
  data: () => {
    return {
      selected: Object
    };
  },
  methods: {
    displayFlightDetails(item) {
      this.$router.push({
        path: `/flights/${item.id}`
      });
    }
  }
};
</script>
