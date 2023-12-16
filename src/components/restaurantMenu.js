import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudImgURL } from "../../src/constants";
import SkeletonLoader from "../components/react-skeleton";
import axios from "axios";

const restaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function getUser() {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=" +
          id
      );
      setRestaurantInfo(response?.data?.data?.cards[0]?.card?.card?.info);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return !restaurantInfo ? (
    <>
      <div className="skeleton-cards">
        {Array.from({ length: 1 }, (_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    </>
  ) : (
    <div className="card">
      <h2>{restaurantInfo.name}</h2>
      <img
        alt="restaurant Logo"
        src={cloudImgURL + restaurantInfo.cloudinaryImageId}
      />
      <h4>{"Locality : " + restaurantInfo.locality}</h4>
      <h4>{"AreaName : " + restaurantInfo.areaName}</h4>
      <h4>{"Total Rating : " + restaurantInfo.totalRatingsString}</h4>
    </div>
  );
};

export default restaurantMenu;
