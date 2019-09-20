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
            <Date dateLabel="Departure Date" />
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <Date dateLabel="Arrival Date" />
          </v-col>
          <v-col :cols="numberOfCols" :lg="numberOfLg">
            <v-btn @click="submitAction(form)"> Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import Date from "./Date";

export default {
  name: "App",
  components: {
    Date
  },
  data: () => ({
    items: ["Singapore", "Jakarta", "Paris"],
    numberOfCols: 12,
    numberOfLg:3,
    form: {
      fromCity: "",
      toCity: "",
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
