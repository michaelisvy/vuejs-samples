<template>
      <v-container>        
        <v-row>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-select :items="items" label="From" v-model="form.fromCity" hint="City or airport" persistent-hint
            ></v-select>
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-select :items="items" label="To" v-model="form.toCity" hint="City or airport" persistent-hint
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            Departure Date <input v-model="form.departureDate">
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            Arrival Date <input v-model="form.returnDate">
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-btn @click="submitAction(form)" color="yellow"> Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  name: "SearchForm",
  components: {},
  data: () => ({
    items: ["Singapore", "Jakarta", "Paris"],
    numberOfCols: 12,
    numberOfLg:3,
    form: {
      fromCity: "",
      toCity: "",
      departureDate: "",
      returnDate: ""
    }, 
  }),
  props: {
    submitAction: Function
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.form);
    }
  }
};
</script>
