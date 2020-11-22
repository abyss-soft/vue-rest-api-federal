<template>
  <div>
    <v-simple-table class="header-setting">
      <template v-slot:default>
        <HeaderTable></HeaderTable>
      </template>
    </v-simple-table>

    <v-simple-table>
      <template v-slot:default>
        <TBodyTable></TBodyTable>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import HeaderTable from "./Header-table";
import TBodyTable from "./Tbody-table";
export default {
  name: "ShowTable",
  components: { HeaderTable, TBodyTable }
};
</script>

<style lang="scss" scoped>
.header-setting {
  position: sticky;
  top: 0;
}
</style>
