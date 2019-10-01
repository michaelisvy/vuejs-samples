<template>
  <v-data-table
    :headers="flightList.headers"
    :items="flightList.flights"
    :items-per-page="5"
    :item-selected="item"
    :item-key="id"
    class="elevation-1"
    @click:row="submitForm()"
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
      selected: Object
    };
  },
  methods: {
    submitForm(item) {
      alert("hello!!! ");
    }
  }
};
</script>
