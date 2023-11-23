import { useState } from "react";
import { restaurants } from "../../constants";
import RestaurantCard from "../body/restaurantCard";

function filterRestaurant(searchText) {
  function formatInput(input) {
    return input.replace(/\s/g, "").toLowerCase();
  }

  return restaurants.filter((res) => {
    if (formatInput(res.info.name).startsWith(formatInput(searchText)))
      return res;
  });
}

const Body = () => {
  const [searchText, setSearchText] = useState();

  return (
    <>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log(filterRestaurant(searchText));
          }}
        >
          search
        </button>
      </div>

      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
