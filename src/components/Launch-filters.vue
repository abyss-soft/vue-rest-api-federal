<template>
  <v-col class="d-flex justify-center" cols="6">
    <v-btn depressed color="primary" @click="launchFilters">
      Применить
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "LaunchFilters",
  methods: {
    launchFilters() {
      this.$store.dispatch("getAsyncOrganisations");
      this.$store.dispatch("setIsUseFilter");
    }
  }
};
</script>

<style scoped></style>
