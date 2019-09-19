<template>
      <v-container>        
        <v-row>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-select :items="items" label="From" v-model="form.fromCity"
            ></v-select>
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-select :items="items" label="To" v-model="form.toCity"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <Date dateLabel="Departure Date" />
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <Date dateLabel="Arrival Date" />
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-btn @click="submitAction(form)"> Submit</v-btn>
          </v-col>
        </v-row>
        <v-row>
           <v-col :cols="12" :lg="9">
        <FlightsTable />
        </v-col>
        </v-row>
      </v-container>
</template>

<script>
import Date from "./Date";
import FlightsTable from "./FlightsTable";

export default {
  name: "App",
  components: {
    Date,
    FlightsTable
  },
  data: () => ({
    items: ["Singapore", "Jakarta", "Paris"],
    numberOfCols: 12,
    numberOfLg:3,
    form: {
      fromCity: String,
      toCity: String,
      departureDate: String,
      arrivalDate: String
    }, 
  }),
  props: {
    submitAction: Function
  },
  methods: {
  }
};
</script>
