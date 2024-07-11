import React from "react";
import Cards, { offersCardLabel } from "./Cards";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import OnmindCard from "./OnmindCard";
import { Search, StarOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  const [Res, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [Onmind, setOnmind] = useState([]);
  const Offerlabel = offersCardLabel(Cards);
  useEffect(() => {
    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9375483&lng=78.07802989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_"
    );
    const json = await data.json();
    setRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setOnmind(json.data.cards[0].card.card.imageGridCards.info);
  };
  console.log(Res);
  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return (
      <h1 style={{ marginTop: "65px", paddingTop: "80px" }}>
        Oops! you look like you're offline,please check your connection!!
      </h1>
    );

  return Res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <h2 className="Banner-title">What's on your mind?</h2>

      <Slider {...settings}>
        {Onmind.map((banner) => (
          <OnmindCard key={banner.id} bannerData={banner} />
        ))}
      </Slider>
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="btn-container">
            <button
              className="search-btn"
              onClick={() => {
                const filtered = Res.filter((filterRes) =>
                  filterRes.info.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                );
                setFilterRes(filtered);
              }}
            >
              <div style={{ paddingRight: "8px" }}>Search</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Search sx={{ fontSize: "20px" }} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="Top-rating">
        <button
          onClick={() => {
            const filtered = Res.filter((newRes) => newRes.info.avgRating > 4);
            setRes(filtered);
            // console.log(filtered);
          }}
          className="TopRating-btn"
        >
          <div>
            <StarOutlined sx={{ color: "gold" }} />
          </div>
          <div style={{ padding: "5px" }}> Top rated restaurants </div>
        </button>
      </div>
      <h2 className="res-title">Top restaurant chains in Madurai</h2>

      <div className="cards">
        {filterRes.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.aggregatedDiscountInfoV3 ? (
              <Offerlabel resData={res} />
            ) : (
              <Cards resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
