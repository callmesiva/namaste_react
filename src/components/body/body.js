import { useEffect, useState } from "react";
import RestaurantCard from "../body/restaurantCard";
import SkeletonLoader from "../react-skeleton";
import { Link } from "react-router-dom";

function filterRestaurant(searchText, restaurants) {
  function formatInput(input) {
    return input.replace(/\s/g, "").toLowerCase();
  }

  return restaurants.filter((res) => {
    if (formatInput(res.info.name).startsWith(formatInput(searchText)))
      return res;
  });
}

const Body = () => {
  let [restaurants, setRestaurant] = useState([]);
  let [filteredRes, setFilterRes] = useState([]);
  let [searchText, setSearchText] = useState();

  async function getData() {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let res = await response.json();
    setRestaurant(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    getData();
  }, []);

  return restaurants.length == 0 ? (
    <>
      <div className="skeleton-cards">
        {Array.from({ length: 12 }, (_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    </>
  ) : (
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
            setFilterRes(filterRestaurant(searchText, restaurants));
          }}
        >
          search
        </button>
      </div>

      <div className="restaurantList">
        {filteredRes.length == 0 ? (
          <h1>NO DATA FOUND!</h1>
        ) : (
          filteredRes.map((restaurant, index) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
