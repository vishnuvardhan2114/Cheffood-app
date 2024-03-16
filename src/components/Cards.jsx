import React from "react";
import { CDN_URL } from "../utils/constants";
import { Stars } from "@mui/icons-material";
import { green } from "@mui/material/colors";

const Cards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRatingString, areaName } =
    resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="card-container">
      <div className="inner-card">
        <div className="img-container">
          <img
            className="card-icon"
            alt="card-img"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="Carddetail-container">
          <div className="name">{name}</div>
          <div className="rating-container">
            <div className="star-logo">
              <Stars sx={{ color: green[800] }} />
            </div>
            <div className="rating">
              <span className="span-container">{avgRatingString} • </span>
              {slaString}
            </div>
          </div>
          <div className="cuisines-container">
            <div className="cuisines">{cuisines.join(", ")}</div>
            <div className="areaName">{areaName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
