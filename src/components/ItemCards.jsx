import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CDN_URL } from "../utils/constants";

const ItemCards = ({ items }) => {
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
    toast.success("Added to Cart");
  };

  return (
    <div>
      {items.map((item) => {
        const itemId = item.card.info.id;

        return (
          <div key={itemId} className="p-2 m-4 border-b-2 flex justify-between">
            <span className="font-semibold text-sm">{item.card.info.name}</span>
            <div className="text-left w-6/12">
              <div className="text-left pl-3">
                <span className="font-semibold text-sm">
                  ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <p className="text-sm mt-2 mr-16">
                  {item.card.info.description}
                </p>
              </div>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 mx-14 mt-14 bg-white font-bold shadow-lg rounded-lg"
                  onClick={() => addToCart(item)}
                >
                  Add+
                </button>
              </div>
              <img
                src={CDN_URL + `${item.card.info.imageId}`}
                alt="dish Image"
                className="shadow-lg rounded-md"
              />
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default ItemCards;
