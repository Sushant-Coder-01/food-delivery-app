import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMAGE } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resId = useRestaurantMenu(restaurantId);

  if (resId === null) return <Shimmer />;

  const recommendedItems =
    resId?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const { name, avgRating, costForTwoMessage, areaName, cloudinaryImageId } =
    resId?.data?.cards[2]?.card?.card?.info;

  return (
    <div>
      <img src={RESTAURANT_IMAGE + cloudinaryImageId} className="eachRes" />
      <h1>{name}</h1>
      <h2>Cost: {costForTwoMessage}</h2>
      <h3>Rating: {avgRating}</h3>
      <h4>Area: {areaName}</h4>
      <h3>Items:</h3>
      {recommendedItems.map((res) => (
        <li key={res?.card?.info?.id}>
          {res?.card?.info?.name} : {res?.card?.info?.price / 100} Rs.
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
