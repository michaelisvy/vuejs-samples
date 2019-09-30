<template>
  <v-container>
    <v-row>
      <v-col :cols="numberOfCols" :lg="numberOfLg">
        <v-select
          v-model="form.fromCity"
          :items="items"
          label="From"
          hint="City or airport"
          persistent-hint
        />
      </v-col>
      <v-col :cols="numberOfCols" :lg="numberOfLg">
        <v-select
          v-model="form.toCity"
          :items="items"
          label="To"
          hint="City or airport"
          persistent-hint
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col :cols="numberOfCols" :lg="numberOfLg">
        Departure Date
        <input v-model="form.departureDate">
      </v-col>
      <v-col :cols="numberOfCols" :lg="numberOfLg">
        Arrival Date
        <input v-model="form.returnDate">
      </v-col>
      <v-col :cols="numberOfCols" :lg="numberOfLg">
        <v-btn color="yellow" @click="submitAction(form)">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchForm",
  components: {},
  props: {
    submitAction: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    items: ["Singapore", "Jakarta", "Paris"],
    numberOfCols: 12,
    numberOfLg: 3,
    form: {
      fromCity: "",
      toCity: "",
      departureDate: "",
      returnDate: ""
    }
  }),
  methods: {}
};
</script>
