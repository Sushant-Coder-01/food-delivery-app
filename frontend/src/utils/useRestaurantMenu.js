import { useEffect, useState } from "react";
import { REST_MENU } from "./constant";

const useRestaurantMenu = (restaurantId) => {
  const [resId, setRestId] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU + restaurantId);
    const json = await data.json();
    setRestId(json);
  };

  return resId;
};

export default useRestaurantMenu;
