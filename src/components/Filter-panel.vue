<template>
  <v-col class="d-flex" cols="3">
    <v-select
      :label="nameValue"
      v-model="selectedValue"
      @input="setSelectValue"
      :items="getName()"
      :item-text="setOptionsSelect"
      :item-value="setOptionsSelect"
    ></v-select>
  </v-col>
</template>

<script>
export default {
  name: "FiltersPanel",
  data: () => ({
    keyObjectFilter: null,
    selectedValue: ""
  }),
  props: {
    indexV: {},
    setOptionsSelect: {
      type: Array
    },
    keyFilterValue: {
      type: String
    },
    nameValue: {
      type: String
    }
  },
  methods: {
    getName() {
      let valueName = [];
      this.setOptionsSelect.forEach(item => {
        valueName.push(item[this.keyObjectFilter]);
      });
      return valueName;
    },
    setSelectValue(value) {
      for (const item of Object.values(this.setOptionsSelect)) {
        if (item[this.keyObjectFilter] === value) {
          let payload = [];
          payload.push(this.keyFilterValue);
          payload.push(item[Object.keys(this.setOptionsSelect[0])[0]]);
          this.$store.commit("setFilterFromForms", payload);
        }
      }
    }
  },
  computed: {
    setValueFilter() {
      return this.$store.getters.getSettingFilter;
    }
  },
  watch: {
    setValueFilter: {
      deep: true,
      handler() {
        if (this.setValueFilter[this.keyFilterValue] === "") {
          this.selectedValue = "";
        }
      }
    }
  },
  created() {
    this.keyObjectFilter = Object.keys(this.setOptionsSelect[0])[1];
  }
};
</script>

<style lang="scss" scoped>
.panel-setting {
  width: 50%;
}
</style>
