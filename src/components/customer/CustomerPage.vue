<template>
  <v-card class="mx-auto" max-width="800">
    <v-data-table :headers="customerList.headers" :items="customerList.data"></v-data-table>
  </v-card>
</template>
<script>
import { getCustomerList } from "@/service/customerService";

export default {
  data: function() {
    return {
      personalInfoList: Object
    };
  },
  created() {
    this.customerList = getCustomerList();
  }
};
</script>