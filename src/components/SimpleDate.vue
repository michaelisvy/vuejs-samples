<template>
  <v-container>      
          <v-text-field
            label="Regular"
          ></v-text-field>
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
