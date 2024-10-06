import ResturantCart from "./ResturantCards";
import resList from "../utils/mockData";

const Body = () => (
    <div className="body">
        <div className="search">
            <h1>Search</h1>
        </div>
        <div className="food-carts">
            {
                resList.map((resturant) => (
                <ResturantCart key={resturant.info.id} resData={resturant} />
                ))
            }
        </div>
    </div>
);

export default Body;