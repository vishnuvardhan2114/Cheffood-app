import { useEffect, useState } from "react";
import { RES_ITEMS_API } from "./constants";

const useRestaurantItem = (resId) => {
  const [ResItem, SetResItem] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(RES_ITEMS_API + resId);
    const json = await data.json();
    SetResItem(json.data);
  };
  return ResItem;
};

export default useRestaurantItem;
