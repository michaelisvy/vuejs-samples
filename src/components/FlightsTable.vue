<template>
  <v-data-table
    :headers="flightList.headers"
    :items="flightList.flights"
    :items-per-page="5"
    class="elevation-1" 
  />
</template>

<script>
export default {
  props: {
    flightList: {
      required:true,
      type:Object
    }
  },
  data: () => {
    return {
    };
  }
};
</script>
