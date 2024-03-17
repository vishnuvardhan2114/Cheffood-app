import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_ITEMS_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import {
  Stars,
  AccessTimeFilledOutlined,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";
import RestaurantItemCard from "./RestaurantItemCard";
const RestaurantItem = () => {
  const [ResItem, SetResItem] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RES_ITEMS_API + resId);
    const json = await data.json();
    SetResItem(json.data);
  };
  if (ResItem === null) return <Shimmer />;

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    areaName,
    totalRatingsString,
  } = ResItem?.cards[0]?.card?.card?.info;
  console.log(
    ResItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );
  console.log(
    ResItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories?.itemCards?.card?.info?.name
  );
  return (
    <div className="restaurantItem-container">
      <div>
        <div className="innerRes-container">
          <div className="resHeader-container">
            <div className="resHeader-wrapper">
              <div className="Address-wraper">
                <div aria-hidden="true">
                  <p className="resName">{name}</p>
                  <p className="resCuisines">{cuisines.join(", ")}</p>
                </div>
                <div className="resAddress">
                  <p className="Area">{areaName},</p>
                  <p className="distance">
                    {
                      ResItem?.cards[0]?.card?.card?.info?.sla
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
            <ul></ul>
            <hr className="header-line" aria-hidden="true"></hr>
            <div className="below-headerline" aria-hidden="true">
              <div className="time-costWrapper">
                <div className="time">
                  <div className="time-logo">
                    <AccessTimeFilledOutlined />
                  </div>
                  <span className="time-text">
                    {ResItem?.cards[0]?.card?.card?.info?.sla?.slaString}
                  </span>
                </div>
                <div className="cost">
                  <div className="cost-logo">
                    <CurrencyRupeeOutlined />
                  </div>
                  <span className="cost-text">{costForTwoMessage}</span>
                </div>
              </div>
            </div>
            <div
              className="recommended-wrapper"
              style={{ position: "relative" }}
            >
              <div className="main-content">
                <h3 className="recommended-title">Recommended </h3>
                {ResItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
                  (item) => (
                    <RestaurantItemCard key={item.id} ResItem={item} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
{
  /* <h1></h1>
<h2>{avgRating}</h2>
<h2>{deliveryTime}</h2>
<p>
  {cuisines.join(", ")} - {costForTwoMessage}
</p>
<ul>
  {itemCards.map((item) => (
    <li key={item.card.info.id}>{item.card.info.name}</li>
  ))}
</ul> */
}
