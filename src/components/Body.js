import ResturantCart from "./ResturantCards";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [filterdRestaurantList, setFilterdRestaurantList] = useState("");

  const [inputText, setInputText] = useState("");

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

    setFilterdRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            console.log("body render");
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filterdResList = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(inputText.toLowerCase())
            );
            setFilterdRestaurantList(filterdResList);
          }}
        >
          Search
        </button>
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
        {filterdRestaurantList.map((resturant) => (
          <ResturantCart key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
