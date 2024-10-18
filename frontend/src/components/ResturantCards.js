import { RESTAURANT_IMAGE } from "../utils/constant";

const ResturantCart = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 bg-orange-100 rounded-md hover:bg-orange-200 transition-transform cursor-pointer">
      <div>
        <img
          className="h-48 w-64 rounded-md"
          src={RESTAURANT_IMAGE + cloudinaryImageId}
        />
      </div>
      <div>
        <h2 className="font-bold w-64 my-4 line-clamp-1">{name}</h2>
        <h3 className="w-64 text-md line-clamp-1">{cuisines.join(", ")}</h3>
      </div>
      <div className="flex flex-wrap justify-between mx-2 my-4">
        <h4 className="font-bold text-gray-600">{avgRating} Stars</h4>
        <h4 className="font-bold text-gray-600">{sla.deliveryTime} mins</h4>
        <h4 className="font-bold text-gray-600">{costForTwo}</h4>
      </div>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (ResturantCart) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-400 px-2 py-1 rounded-md transition-transform z-10 hover:shadow-inherit">
          OPEN
        </label>
        <ResturantCart {...props} />
      </div>
    );
  };
};

export default ResturantCart;
