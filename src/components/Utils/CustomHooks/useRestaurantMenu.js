import axios from "axios";
import { useEffect, useState } from "react";
import { FETCH_RESMENU_URL } from "../../../constants";

const useRestaurantMenu = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function getUser() {
    try {
      const response = await axios.get(FETCH_RESMENU_URL + id);
      setRestaurantInfo(response?.data?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return restaurantInfo;
};

export default useRestaurantMenu;
