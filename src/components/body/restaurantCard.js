import { CLOUD_IMG_URL } from "../../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => (
  <div className="card">
    <img alt="restaurant card" src={CLOUD_IMG_URL + cloudinaryImageId} />
    <h2> {name} </h2>
    <h4 id="cuisines"> {cuisines.join(",")}</h4>
    <h2> {avgRating} Stars</h2>
  </div>
);

export default RestaurantCard;
