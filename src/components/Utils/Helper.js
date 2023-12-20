export function filterRestaurant(searchText, restaurants) {
  function formatInput(input) {
    return input.replace(/\s/g, "").toLowerCase();
  }

  return restaurants.filter((res) => {
    if (formatInput(res.info.name).startsWith(formatInput(searchText)))
      return res;
  });
}
