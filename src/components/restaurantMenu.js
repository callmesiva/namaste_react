import { useParams } from "react-router-dom";
import { CLOUD_IMG_URL } from "../constants";
import Shimmer from "./Utils/Shimmer";
import useRestaurantMenu from "./Utils/CustomHooks/useRestaurantMenu";

const restaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantMenu(id);

  return !restaurantInfo ? (
    <>
      <div className="skeleton-cards">
        {Array.from({ length: 1 }, (_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    </>
  ) : (
    <div className="card">
      <h2>{restaurantInfo.name}</h2>
      <img
        alt="restaurant Logo"
        src={CLOUD_IMG_URL + restaurantInfo.cloudinaryImageId}
      />
      <h4>{"Locality : " + restaurantInfo.locality}</h4>
      <h4>{"AreaName : " + restaurantInfo.areaName}</h4>
      <h4>{"Total Rating : " + restaurantInfo.totalRatingsString}</h4>
    </div>
  );
};

export default restaurantMenu;
