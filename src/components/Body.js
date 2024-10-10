import ResturantCart from "./ResturantCards";
import { useState, useEffect } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  const [filterdRestaurantList, setFilterdRestaurantList] = useState("");

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fethData();
    // fetchUpdatedData();
  }, []);

  const fethData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfResturants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterdRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // const fetchUpdatedData = async () => {
  //   const updatedData = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/update",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         lat: 18.5204303,
  //         lng: 73.8567437,
  //         nextOffset: "CJhlELQ4KICIhef1/4XkczCnEzgE",
  //         widgetOffset: {
  //           NewListingView_category_bar_chicletranking_TwoRows: "",
  //           NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
  //           Restaurant_Group_WebView_SEO_PB_Theme: "",
  //           collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
  //           inlineFacetFilter: "",
  //           restaurantCountWidget: "",
  //         },
  //         filters: {},
  //         seoParams: {
  //           seoUrl: "https://www.swiggy.com/",
  //           pageType: "FOOD_HOMEPAGE",
  //           apiName: "FoodHomePage",
  //         },
  //         page_type: "DESKTOP_WEB_LISTING",
  //         _csrf: "HEJxwZ2Db9UR-6XoRPyh-Yw9xZRZkSLXa-gUCw84",
  //       }),
  //     }
  //   );

  //   const json = await updatedData.json();

  //   console.log(json);
  // };

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
