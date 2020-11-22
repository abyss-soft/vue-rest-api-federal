import axios from "axios";

const createLinkToOrganizations = (link, filter) => {
  let linkWithFilters = link;
  for (const [key, value] of Object.entries(filter)) {
    if (value) {
      linkWithFilters += key + "=" + value + "&";
    }
  }
  return linkWithFilters;
};

export default {
  getTranslateNameFromServer(context) {
    axios
      .options(context.state.linkAPI.getOrganisationAPI)
      .then(response =>
        context.commit("setTableHeaderNames", response.data.actions.POST)
      );
  },
  setIsUseFilter(context) {
    context.commit("setFlagIsUseFilter");
  },
  getAsyncOrganisations(context, url) {
    let linkOrganisation = null;
    let link = null;
    if (!url) {
      linkOrganisation = createLinkToOrganizations(
        context.state.linkAPI.getOrganisationAPI,
        context.state.setFilter
      );
      link = linkOrganisation;
    } else {
      link = url;
    }
    axios
      .get(link)
      .then(response => context.commit("setOrganisation", response));
  },
  getFiltersFromServer(context) {
    for (const [name, link] of Object.entries(context.state.linkAPI.filters)) {
      axios.get(link).then(response =>
        context.commit("setFilters", {
          filter: name,
          data: response.data
        })
      );
    }
  }
};
