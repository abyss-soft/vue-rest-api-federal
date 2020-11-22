<template>
  <v-container fluid class="home">
    <Filters></Filters>
    <TopPanels class="mt-10 mb-16"></TopPanels>
    <ShowTable></ShowTable>
  </v-container>
</template>

<script>
import Filters from "../components/Filters-group";
import TopPanels from "../components/Top-panels";
import ShowTable from "../components/Show-Table";

export default {
  name: "Home",
  components: { Filters, TopPanels, ShowTable },
  created() {
    this.$store.dispatch("getTranslateNameFromServer");
  }
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style>
