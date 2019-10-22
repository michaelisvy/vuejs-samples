<template>
  <v-row justify="center">
    <v-dialog v-model="customer" max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">{{customer.firstName}}</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="editDialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "EditCustomerDialog",
  props: {
    customer: {
      required: true,
      type: Object
    },
    submitFormMethod: {
      type: Function,
      required: true
    }
  }
};
</script>