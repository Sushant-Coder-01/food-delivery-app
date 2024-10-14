import ResturantCart from "./ResturantCards";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [filterdRestaurantList, setFilterdRestaurantList] = useState([]);

  const [inputText, setInputText] = useState("");

  const listOfResturants = useRestaurants();

  useEffect(() => {
    setFilterdRestaurantList(listOfResturants);
  }, [listOfResturants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are offline. Please check you connection...!</h1>;

  const input = (e) => {
    setInputText(e.target.value);
    console.log("body render");
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
          onChange={input}
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
            setFilterdRestaurantList(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {filterdRestaurantList.length === 0 ? (
        <h1 className="no-restaurant">No Restaurants Found...!</h1>
      ) : (
        <div className="food-carts">
          {filterdRestaurantList.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/restaurants/" + resturant.info.id}
            >
              <ResturantCart resData={resturant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
