import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10 &&
      !loading
    ) {
      fetchData();
    }
  };

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${SWIGGY_API}?offset=${offset}&is-seo-homepage-enabled=true&lat=18.5204303&lng=73.8567437&carousel=true&third_party_vendor=1`
      );

      const data = await response.json();

      const newRestaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // console.log(newRestaurants);

      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        ...newRestaurants,
      ]);
      setOffset(offset + 10);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setLoading(false);
  };

  return { restaurants, loading, handleScroll };
};

export default useRestaurants;
