<template>
  <v-card class="mx-auto" max-width="800">
    <v-data-table :headers="personalInfoList.headers" :items="personalInfoList.personalInfo"></v-data-table>
  </v-card>
</template>
<script>
import { getPersonalInfo } from "@/service/personalInfoService";

export default {
  data: function() {
    return {
      personalInfoList: Object
    };
  },
  created() {
    this.personalInfoList = getPersonalInfo();
  }
};
</script>