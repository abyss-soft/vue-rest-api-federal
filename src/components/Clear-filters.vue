<template>
  <v-col class="d-flex justify-center" cols="6">
    <v-btn depressed @click="clearFilters">
      Очистить
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "ClearFilters",
  methods: {
    clearFilters() {
      this.$store.commit("clearFilters");
      this.$store.dispatch("getAsyncOrganisations");
      this.$store.dispatch("setIsUseFilter");
    }
  }
};
</script>
