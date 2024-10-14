import { useState, useEffect } from "react";
import { REST_DATA } from "./constant";

const useRestaurants = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fethData();
  }, []);

  const fethData = async () => {
    const data = await fetch(REST_DATA);

    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturants;
};

export default useRestaurants;
