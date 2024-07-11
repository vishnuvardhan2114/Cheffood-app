import React from "react";
import { CDN_URL } from "../utils/constants";
import { Stars } from "@mui/icons-material";
import { green } from "@mui/material/colors";

const Cards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, areaName } = resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="w-8 p-2 rounded-md block mx-[32px] my-[16px]">
      <div className="">
        <div className="w-6 h-6">
          <img
            className="card-icon"
            alt="card-img"
            src={CDN_URL + resData?.info?.cloudinaryImageId}
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

export const offersCardLabel = (Cards) => {
  return (props) => {
    const { resData } = props;
    return (
      <div className="">
        <label className="absolute bg-green-400 text-white">
          {resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <Cards {...props} />
      </div>
    );
  };
};

export default Cards;
