import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { RESTAURANT_IMAGE } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const [toggle, setToggle] = useState(false);

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

  // console.log(resInfo?.data?.cards[2]?.card?.card?.info);

  return (
    <div className="flex-col w-6/12 justify-center m-auto my-10">
      <div className="flex gap-10 my-5">
        <div>
          <img
            className="w-48 h-48 rounded-lg"
            src={RESTAURANT_IMAGE + cloudinaryImageId}
          />
        </div>
        <div>
          <div className="font-bold text-gray-700 text-4xl my-2 ">{name}</div>
          <div className="text-xl">Cost: {costForTwoMessage}</div>
          <div className="text-lg">Rating: {avgRating}</div>
          <div className="text-sm text-gray-700">Area: {areaName}</div>
        </div>
      </div>
      <div>
        {categories?.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => prevIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
