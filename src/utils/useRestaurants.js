import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";
import data from "./dummyData";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState();

  // const fetchData = async () => {
  //   const response = await fetch(SWIGGY_API, {
  //     method: "GET", // or 'POST' if needed
  //     cache: "no-store", // Prevents caching
  //     mode: "cors", // Use 'cors' or 'no-cors' as needed
  //   });

  // const data = await response.json();

  //   const newRestaurants =
  //     data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants;

  //   console.log(newRestaurants);

  //   setRestaurants([...newRestaurants]);
  // };

  // useEffect(() => {
  //   // fetchData();

  // }, []);

  const restaurantList =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  // console.log(restaurantList);

  useEffect(() => {
    setRestaurants(restaurantList);
  }, []);

  return restaurants;
};

export default useRestaurants;
