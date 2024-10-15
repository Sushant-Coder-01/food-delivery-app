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
    <div className="body mb-10">
      <div className="filter">
        <input
          type="text"
          className="ml-4 my-4 mr-1 p-1 border-2 border-solid border-black rounded-md w-64"
          value={inputText}
          onChange={input}
        ></input>
        <button
          className="border border-solid border-black px-4 py-1  rounded-md bg-orange-400 hover:bg-orange-300"
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
          className="border border-solid border-black px-4 py-1  rounded-md mx-10 bg-orange-400 hover:bg-orange-300"
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
        <div className="flex flex-wrap justify-center">
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
