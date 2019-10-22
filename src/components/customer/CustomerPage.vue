<template>
  <v-card class="mx-auto" max-width="800">
    <v-data-table
      :headers="customerList.headers"
      :items="customerList.data"
      @click:row="displayCustomerDetails"
    >
      <v-toolbar flat color="white">
        <v-toolbar-title>Detailed Passenger Information</v-toolbar-title>
      </v-toolbar>
      <EditCustomerDialog :customer="selectedCustomer" :submit-form-method="submitUpdateForm" />
      <v-icon small @click.stop="deleteItem(item)">delete</v-icon>
    </v-data-table>
  </v-card>
</template>
<script>
import * as customerService from "@/service/customerService";
import EditCustomerDialog from "./EditCustomerDialog";

export default {
  components: {
    EditCustomerDialog
  },
  data: function() {
    return {
      customerList: Object,
      selectedCustomer: {},
      editDialog: false
    };
  },
  created() {
    this.customerList = customerService.getCustomerList();
  },
  methods: {
    initUpdateForm(item) {
      this.selectedCustomer = item;
      this.editDialog = true;
    },
    submitUpdateForm(item) {
      alert(item.firstName + "  submitted");
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