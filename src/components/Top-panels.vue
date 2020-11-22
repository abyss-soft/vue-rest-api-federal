<template>
  <v-row class="header-block align-center">
    <v-col class="d-flex justify-end">
      <v-btn depressed @click="previousPages">
        &#8592;
      </v-btn>
    </v-col>
    <v-col>
      <h1 class="d-flex justify-center">Организации</h1>
    </v-col>
    <v-col class="d-flex justify-start">
      <v-btn depressed @click="nextPages">
        &#8594;
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TopPanels",
  methods: {
    previousPages() {
      if (this.$store.state.organisations.previous) {
        this.$store.dispatch("setIsUseFilter");
        this.$store.dispatch(
          "getAsyncOrganisations",
          this.$store.state.organisations.previous
        );
      }
    },
    nextPages() {
      if (this.$store.state.organisations.next) {
        this.$store.dispatch("setIsUseFilter");
        this.$store.dispatch(
          "getAsyncOrganisations",
          this.$store.state.organisations.next
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-block {
  background-color: #0c5c5f;
  color: wheat;
}
</style>
