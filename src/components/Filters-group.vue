<template>
  <v-row>
    <FilterPanel
      v-for="(setOptionsSelect, keyFilterValue, index) in listFilters"
      :key="keyFilterValue.id"
      :nameValue="getTitleFilters[index]"
      :keyFilterValue="keyFilterValue"
      :setOptionsSelect="setOptionsSelect"
      :indexV="index"
      class="d-flex justify-center"
    >
    </FilterPanel>
    <ClearFilters></ClearFilters>
    <LaunchFilter></LaunchFilter>
  </v-row>
</template>

<script>
import FilterPanel from "./Filter-panel";
import ClearFilters from "./Clear-filters";
import LaunchFilter from "./Launch-filters";

export default {
  name: "Filters",
  components: { FilterPanel, ClearFilters, LaunchFilter },
  data: () => ({
    listFilters: null,
    viewOrganisation: null
  }),
  methods: {
    getFiltersFromAPI() {
      this.$store.dispatch("getFiltersFromServer");
    },
    getOrganisations() {
      this.$store.dispatch("getAsyncOrganisations");
    },
    getFiltersList() {
      this.listFilters = this.$store.getters.getListFilters;
    },
    setOrganisation() {
      this.viewOrganisation = this.$store.getters.getListOrganisations;
    }
  },
  computed: {
    getTitleFilters() {
      return this.$store.getters.getTitleFilters;
    }
  },
  created() {
    this.getFiltersFromAPI();
    this.getOrganisations();
    this.getFiltersList();
    this.setOrganisation();
  }
};
</script>

<style lang="scss" scoped></style>
