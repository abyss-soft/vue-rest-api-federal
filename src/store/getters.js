export default {
  getListFilters(state) {
    return state.dateForFilters;
  },
  getIsUseFilter(state) {
    return state.isUseFilter;
  },
  getSettingFilter(state) {
    return state.setFilter;
  },
  getListOrganisations(state) {
    return state.organisations;
  },
  getTitleFilters(state) {
    return state.titleFilters;
  },
  getTableHeaderNames(state) {
    return state.tableHeaderNames;
  }
};
