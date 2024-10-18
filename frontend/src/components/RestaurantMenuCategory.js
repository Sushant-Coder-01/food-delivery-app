import { useState } from "react";
import ItemList from "./ItermList";

const RestaurantMenuCategory = (props) => {
  const { data } = props;

  const [showList, setShowList] = useState(true);

  const update = () => {
    setShowList(!showList);
    console.log("button clicked...!");
  };

  return (
    <div>
      <div className="my-4 p-4 shadow-lg bg-gray-100 rounded-lg">
        <div
          className="text-xl font-bold flex justify-between cursor-pointer"
          onClick={() => update()}
        >
          <div>
            {data?.title} ({data?.itemCards.length})
          </div>
          <div>▼</div>
        </div>
        <div>{showList && <ItemList itemCards={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
