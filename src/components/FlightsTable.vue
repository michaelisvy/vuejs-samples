<template>
  <v-data-table
    :headers="flightInfo.headers"
    :items="flightInfo.flights"
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
    flightInfo:Object
  }
};
</script>
