import ItemList from "./ItermList";

const RestaurantMenuCategory = (props) => {
  const { data, showItems, setShowIndex } = props;

  const update = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="my-4 p-4 shadow-lg bg-gray-100 rounded-lg">
        <div
          className="text-xl font-bold flex justify-between cursor-pointer"
          onClick={update}
        >
          <div>
            {data?.title} ({data?.itemCards.length})
          </div>
          <div>▼</div>
        </div>
        <div>{showItems && <ItemList itemCards={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
