import React from "react";
import {
  Stars,
  AccessTimeFilledOutlined,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";
const MenuHeaders = ({ ResItem }) => {
  const { avgRating, costForTwoMessage, totalRatingsString } =
    ResItem?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div className="innerRes-container">
        <div className="resHeader-container">
          <div className="resHeader-wrapper">
            <div className="Address-wraper">
              <div aria-hidden="true">
                <p className="resName">{ResItem?.cards[0]?.card?.card?.text}</p>
                <p className="resCuisines">
                  {ResItem?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
                </p>
              </div>
              <div className="resAddress">
                <p className="Area">
                  {ResItem?.cards[2]?.card?.card?.info?.areaName},
                </p>
                <p className="distance">
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
              <CurrencyRupeeOutlined />
              <span className="cost-text">{costForTwoMessage}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeaders;
