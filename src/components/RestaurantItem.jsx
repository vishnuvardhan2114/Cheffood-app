import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_ITEMS_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantItem = () => {
  const [ResItem, SetResItem] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RES_ITEMS_API + resId);
    const json = await data.json();
    SetResItem(json.data);
  };
  if (ResItem === null) return <Shimmer />;

  const { name, avgRating, deliveryTime, cuisines, costForTwoMessage } =
    ResItem?.cards[0]?.card?.card?.info;
  const { itemCards } =
    ResItem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{avgRating}</h2>
      <h2>{deliveryTime}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}> {item.card.info.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantItem;
