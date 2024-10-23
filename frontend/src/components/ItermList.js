import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE } from "../utils/constant";
import { addItems } from "../redux/cartSlice";

const ItemList = (props) => {
  const { itemCards } = props;

  // console.log(itemCards);
  const dispatch = useDispatch();

  const addItemsToCart = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {itemCards?.map((item, index) => (
        <div
          key={item?.card?.info?.id || index}
          className="border-b-2 m-4 p-2  flex justify-between "
        >
          <div className="w-9/12">
            <div className="text-lg font-medium flex-col">
              {item?.card?.info?.name}
            </div>
            <div className="text-gray-600">
              - ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <div className="text-sm text-gray-500 font-semibold my-2">
              {item?.card?.info?.description}
            </div>
          </div>
          <div className="my-2 text-center">
            <div>
              <img
                className="w-36 h-36 rounded-lg"
                alt="image"
                src={RESTAURANT_IMAGE + item?.card?.info?.imageId}
              />
            </div>
            <div>
              <button
                className="shadow-lg border-b-2 text-white bg-black px-3 py-1 rounded-lg -m-px-10"
                onClick={() => addItemsToCart(item)}
              >
                Add+
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
