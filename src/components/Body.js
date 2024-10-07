import ResturantCart from "./ResturantCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState(resList);

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
