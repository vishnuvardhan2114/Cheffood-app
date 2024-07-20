import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import RestaurantItemCard from "./RestaurantItemCard";
import useRestaurantItem from "../utils/useRestaurantItem";
import { AccessTimeFilledOutlined, Stars } from "@mui/icons-material";
import { useState } from "react";

const RestaurantItem = () => {
  const { resId } = useParams();
  const ResItem = useRestaurantItem(resId);
  const [showItems, setShowItems] = useState(0);

  if (ResItem === null) return <Shimmer />;

  const categories =
    ResItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { avgRating, costForTwoMessage, totalRatingsString } =
    ResItem?.cards[2]?.card?.card?.info;
  return (
    <>
      <div className="">
        <div className="max-w-[800px] min-[800px] m-auto">
          <div className="my-4">
            <div className="pt-4 mb-5">
              <div className="inline-block mr-4 ">
                <div aria-hidden="true">
                  <p className="text-[1.43rem] font-semibold text-gray-600 mb-2 capitalize">
                    {ResItem?.cards[0]?.card?.card?.text}
                  </p>
                  <p className="text-[0.93rem text-gray-600 overflow-hidden text-ellipsis mb-1 whitespace-nowrap ]">
                    {ResItem?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
                  </p>
                </div>
                <div className="flex text-center h-4">
                  <p className="text-[0.93rem] text-gray-700">
                    {ResItem?.cards[2]?.card?.card?.info?.areaName},
                  </p>
                  <p className="text-[0.93rem] text-gray-700 pl-1">
                    {
                      ResItem?.cards[2]?.card?.card?.info?.sla
                        ?.lastMileTravelString
                    }
                  </p>
                </div>
              </div>
              <button className="rating-btn" aria-hidden="true">
                <span className="avg-rating">
                  <span className="star-logo">
                    <Stars />
                  </span>
                  <span className="avg-rating-text">{avgRating}</span>
                </span>
                <span className="total-rating" aria-hidden="true">
                  {totalRatingsString}
                </span>
              </button>
            </div>
            <hr className="header-line" aria-hidden="true"></hr>
            <div className="time-costWrapper">
              <div className="time">
                <div className="time-logo">
                  <AccessTimeFilledOutlined />
                </div>
                <span className="time-text">
                  {ResItem?.cards[0]?.card?.card?.info?.sla?.slaString}
                </span>
              </div>
              <div className="cost-logo">
                <span className="cost-text">{costForTwoMessage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantItemCard
            data={category?.card?.card}
            showItems={index === showItems ? true : false}
            setShowItems={() => setShowItems(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantItem;
