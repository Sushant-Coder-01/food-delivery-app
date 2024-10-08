import ResturantCart from "./ResturantCards";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fethData();
  }, []);

  const fethData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter the list
            const filterdList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturants(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="food-carts">
        {listOfResturants.map((resturant) => (
          <ResturantCart key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
