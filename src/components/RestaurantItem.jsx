import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {
  Stars,
  AccessTimeFilledOutlined,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";
import RestaurantItemCard from "./RestaurantItemCard";
import useRestaurantItem from "../utils/useRestaurantItem";

const RestaurantItem = () => {
  const { resId } = useParams();
  const ResItem = useRestaurantItem(resId);

  if (ResItem === null) return <Shimmer />;

  const { avgRating, costForTwoMessage, totalRatingsString } =
    ResItem?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurantItem-container">
      <div>
        <div className="innerRes-container">
          <div className="resHeader-container">
            <div className="resHeader-wrapper">
              <div className="Address-wraper">
                <div aria-hidden="true">
                  <p className="resName">
                    {ResItem?.cards[0]?.card?.card?.text}
                  </p>
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
                {ResItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
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
