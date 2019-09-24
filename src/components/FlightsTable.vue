<template>
  <v-data-table
    :headers="flightList.headers"
    :items="flightList.flights"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {

  data: () => {
    return {
    };
  },
  props: {
    flightList:Object
  }
};
</script>
