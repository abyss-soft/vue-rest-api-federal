const getLinkChange = link => {
  if (!link) return null;
  return link.indexOf("/api/") !== -1
    ? link.slice(link.indexOf("/api/") + 4)
    : "";
};

export default {
  setTableHeaderNames(state, payload) {
    let newTable = {};

    for (let [key, item] of Object.entries(payload)) {
      newTable[key] = item["label"];
      state.tableHeaderNames = newTable;
    }
  },
  setFlagIsUseFilter(state) {
    state.isUseFilter = !state.isUseFilter;
  },
  setFilters(state, payload) {
    state.dateForFilters[payload.filter] = payload.data;
  },
  setOrganisation(state, payload) {
    state.organisations.count = payload.data.count;
    state.organisations.next = getLinkChange(payload.data.next);
    state.organisations.previous = getLinkChange(payload.data.previous);
    state.organisations.results = payload.data.results;
  },
  setFilterFromForms(state, payload) {
    if (!Array.isArray(payload)) return;
    state.setFilter[payload[0]] = payload[1];
  },
  clearFilters() {
    for (const key of Object.keys(this.state.setFilter)) {
      this.state.setFilter[key] = "";
    }
  }
};
