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
        <v-icon
          small
          class="mr-2"
          @click.stop="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click.stop="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import * as customerService from "@/service/customerService";

export default {
  data: function() {
    return {
      customerList: Object
    };
  },
  created() {
    this.customerList = customerService.getCustomerList();
  },
  methods: {
    editItem(item) {
      alert("hellooo " + item.firstName);
    },
    deleteItem(item) {
      const message = "are you sure you want to delete customer " + item.firstName + " " + item.lastName + "?";
      confirm(message) && customerService.deleteById(item.id);

    },
    displayCustomerDetails(item) {
      alert(item.firstName + "  ");
    }
  }
};
</script>