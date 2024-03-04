import React from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import OnmindCard from "./OnmindCard";
import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Body = () => {
  const [Res, setRes] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [Onmind, setOnmind] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9375483&lng=78.07802989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setOnmind(json.data.cards[0].card.card.imageGridCards.info);
  };
  console.log(Array.isArray(Onmind)); // Check if Onmind is an array
  return Res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <h2>What's on your mind?</h2>
      <div className="on-mind">
        <div className="scroll-btn">
          <button className="left-btn">
            <ArrowCircleLeftRounded
              className="left-arrow"
              sx={{ fontSize: 33 }}
            />
          </button>
          <button className="right-btn">
            <ArrowCircleRightRounded
              className="right-arrow"
              sx={{ fontSize: 33 }}
            />
          </button>
        </div>
        {Onmind.slice(0, 8).map((banner) => (
          <OnmindCard key={banner.id} bannerData={banner} />
        ))}
      </div>
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
            Search
          </button>
        </div>
        <div className="Toprating">
          <button
            onClick={() => {
              const filtered = Res.filter(
                (newRes) => newRes.info.avgRating > 4
              );
              setRes(filtered);
            }}
            className="TopRating-btn"
          >
            Top rated hotel
          </button>
        </div>
      </div>
      <h2>Top restaurant chains in Madurai</h2>
      <div className="cards">
        {filterRes.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {" "}
            <Cards resData={res} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
