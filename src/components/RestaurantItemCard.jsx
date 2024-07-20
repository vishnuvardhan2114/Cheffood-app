import React from "react";
import { ArrowDownward } from "@mui/icons-material";
import ItemCards from "./ItemCards";

const RestaurantItemCard = ({ data, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 mx-auto my-4 p-4 shadow-lg text-center ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <ArrowDownward />
          </span>
        </div>
        {showItems && <ItemCards items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantItemCard;
