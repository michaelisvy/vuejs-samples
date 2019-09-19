<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Travel</span>
        <span class="font-weight-light">Vuetify</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <SearchForm :submitAction="submitSearchForm" />
    </v-content>
  </v-app>
</template>
<script>
import SearchForm from "./components/SearchForm";

export default {
  name: "App",
  components: {
    SearchForm
  },
  data: () => ({}),
  methods: {
    submitSearchForm(form) {
      alert(form.fromCity + " hello!!!! " + form.toCity);
    }
  }
};
</script>
