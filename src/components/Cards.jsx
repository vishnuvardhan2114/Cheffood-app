import React from "react";
import { CDN_URL } from "../utils/constants";
import { Stars } from "@mui/icons-material";
import { green } from "@mui/material/colors";

const Cards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, areaName } = resData?.info;
  const { slaString } = resData?.info?.sla;
  return (
    <div className="w-[250px] bg-[#f0f0f0] p-2 rounded-2xl gap-7 mx-8 my-4 hover:bg-slate-200">
      <div className="inner-card">
        <div className=" w-[100%] h-[100%] rounded-2xl overflow-hidden">
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
        <div className="absolute">
          <label className="bg-green-700 p-2 rounded-lg text-white shadow-xl mx-12 hover:bg-green-600">
            {resData?.info?.aggregatedDiscountInfoV3?.header}
            {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
          </label>
        </div>
        <div>
          <Cards {...props} />
        </div>
      </div>
    );
  };
};

export default Cards;
