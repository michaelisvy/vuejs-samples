<template>
  <v-card class="mx-auto" max-width="800">
    <v-data-table
      :headers="customerList.headers"
      :items="customerList.data"
      @click:row="displayCustomerDetails"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Detailed Passenger Information</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click.stop="editItem(item)">edit</v-icon>
        <v-icon small @click.stop="deleteItem(item)">delete</v-icon>
        <v-dialog v-model="editDialog" max-width="290">
          <v-card>
            <v-card-title class="headline">Use Google's location service?</v-card-title>
            <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="editDialog = false">Agree</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import * as customerService from "@/service/customerService";

export default {
  data: function() {
    return {
      customerList: Object,
      editDialog: false
    };
  },
  created() {
    this.customerList = customerService.getCustomerList();
  },
  methods: {
    editItem() {
      this.editDialog = true;
    },
    deleteItem(item) {
      const message =
        "are you sure you want to delete customer " +
        item.firstName +
        " " +
        item.lastName +
        "?";
      confirm(message) && customerService.deleteById(item.id);
    },
    displayCustomerDetails(item) {
      alert(item.firstName + "  ");
    }
  }
};
</script>