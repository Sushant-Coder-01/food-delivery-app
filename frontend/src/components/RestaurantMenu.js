import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMAGE } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const resInfo = useRestaurantMenu(restaurantId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, areaName, cloudinaryImageId } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="flex-col w-6/12 justify-center m-auto mt-20">
      <div>
        <img
          className="w-36 h-36 rounded-lg"
          src={RESTAURANT_IMAGE + cloudinaryImageId}
        />
      </div>
      <div className="font-bold text-4xl my-2 ">{name}</div>
      <div className="text-xl">Cost: {costForTwoMessage}</div>
      <div className="text-lg">Rating: {avgRating}</div>
      <div className="text-sm">Area: {areaName}</div>
      <div>
        {categories.map((category) => (
          <RestaurantMenuCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
