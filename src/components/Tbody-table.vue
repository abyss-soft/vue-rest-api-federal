<template>
  <tbody id="bodyTable">
    <tr v-for="(item, index) in getDataBody" :key="index">
      <td v-for="(value, keyValue) in item" :key="value.id" class="size">
        {{ getCorrectName(value, keyValue) }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TbodyTable",
  data: () => ({
    viewOrganisation: null,
    listFilters: null,
    dataBodyTable: []
  }),
  computed: {
    getDataBody() {
      return this.dataBodyTable;
    }
  },
  methods: {
    getCorrectName(value, keyValue) {
      let result = null;
      let translate = this.listFilters;
      if (translate[keyValue]) {
        result = translate[keyValue].find(function(item) {
          return item.code === value;
        });
        if (typeof result === "undefined") {
          result = value;
        }
        if (result.name) {
          result = result.name;
        }
        if (keyValue === Object.keys(this.listFilters)[0]) {
          result = Object.values(value)[1];
        }
      } else {
        result = value;
      }
      return result;
    },
    setDataBodyTable() {
      if (this.viewOrganisation.count === "") return;
      let fixArray = [];
      if (this.$store.getters.getIsUseFilter) {
        this.$store.dispatch("setIsUseFilter");
        this.dataBodyTable = [];
      } else {
        fixArray = Array.from(new Set(this.dataBodyTable));
      }
      this.viewOrganisation.results.forEach(item => {
        fixArray.push(item);
      });
      this.dataBodyTable = Array.from(new Set(fixArray));
    },
    setOrganisation() {
      this.viewOrganisation = this.$store.getters.getListOrganisations;
    },
    setListFilter() {
      this.listFilters = this.$store.getters.getListFilters;
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          if (this.$store.state.organisations.next) {
            this.$store.dispatch(
              "getAsyncOrganisations",
              this.$store.state.organisations.next
            );
          }
        }
      };
    }
  },
  watch: {
    viewOrganisation: {
      deep: true,
      handler() {
        this.setDataBodyTable();
      }
    }
  },
  created() {
    this.setOrganisation();
    this.setListFilter();
  },
  mounted() {
    this.scroll();
  }
};
</script>

<style lang="scss" scoped>
.size {
  width: 200px;
}
</style>
