<template>
  <v-container>
        <v-menu
          ref="dateMenu"
          v-model="dateMenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              :label="dateLabel" 
              persistent-hint
              @blur="date = changeValueAction(date)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="startDate" no-title @input="dateMenu = false"></v-date-picker>
        </v-menu>
  </v-container>
</template>

<script>
export default {
  props: {
    dateLabel:String,
    changeValueAction: Function
  },
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    dateMenu: false
  }),

  computed: {
    computedStartDateFormatted() {
      return this.formatDate(this.startDate);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.startDate);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
