import React from "react";
import { CART_ITEM_PIC } from "../utils/constants";
import { CurrencyRupee } from "@mui/icons-material";
const RestaurantItemCard = ({ ResItem }) => {
  return (
    <div>
      <div>
        <div>
          <div className="style-container">
            <div className="inner-styleContainer">
              <div className="inner-style-container">
                <div className="style-name-container">
                  <h3 className="name-text">{ResItem?.card?.info?.name}</h3>
                </div>
                <div className="image-container">
                  <div aria-hidden="true">
                    <div className="cart-img-wrapper">
                      <img
                        src={CART_ITEM_PIC + ResItem?.card?.info?.imageId}
                        className="cart-item-img"
                        alt={ResItem?.card?.info?.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="price-and-offer-wrapper">
                  <span className="price" aria-hidden="true">
                    <span className="rupee">
                      <CurrencyRupee sx={{ fontSize: "small" }} />
                      {ResItem?.card?.info?.price / 100}
                    </span>
                  </span>
                </div>

                <div className="description">
                  {ResItem?.card?.info?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboveHeader-cartLine"></div>
      <hr className="header-line" aria-hidden="true" />
    </div>
  );
};

export default RestaurantItemCard;
