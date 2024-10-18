import { RESTAURANT_IMAGE } from "../utils/constant";

const ItemList = (props) => {
  const { itemCards } = props;

  // console.log(itemCards);

  return (
    <div>
      {itemCards.map((c, index) => (
        <div
          key={c?.card?.info?.id || index}
          className="border-b-2 m-4 p-2  flex justify-between "
        >
          <div className="w-9/12">
            <div className="text-lg font-medium flex-col">
              {c?.card?.info?.name}
            </div>
            <div className="text-gray-600">
              - ₹
              {c?.card?.info?.price
                ? c?.card?.info?.price / 100
                : c?.card?.info?.defaultPrice / 100}
            </div>
            <div className="text-sm text-gray-500 font-semibold my-2">
              {c?.card?.info?.description}
            </div>
          </div>
          <div className="my-2 text-center">
            <div>
              <img
                className="w-36 h-36 rounded-lg" alt="image"
                src={RESTAURANT_IMAGE + c?.card?.info?.imageId}
              />
            </div>
            <div>
              <button className="shadow-lg border-b-2 text-white bg-black px-3 py-1 rounded-lg -m-px-10">
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
