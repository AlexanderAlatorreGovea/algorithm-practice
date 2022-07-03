const filters = {
  name: [],
  item: ["alex"],
  anotherItem: [],
  t: "",
};

const checkForFilters = (filters) => {
  let hasFilters = false;

  for (filter in filters) {
    if (Array.isArray(filters[filter]) && filters[filter].length) {
      hasFilters = true;
    }
  }

  return hasFilters;
};

console.log(checkForFilters(filters));
