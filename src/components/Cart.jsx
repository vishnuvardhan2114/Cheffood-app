import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.error("Cart Cleared Successfully");
  };
  console.log(cartItems);
  return (
    <div className="mb-[100%] ">
      <h1 className="text-3xl font-bold text-center mt-6">Cart Details</h1>
      {cartItems.length > 0 && (
        <div className="text-right mt-6 px-5">
          <Button variant="outlined" color="error" onClick={handleClearCart}>
            Clear
          </Button>
        </div>
      )}
      {cartItems.length === 0 ? (
        <Typography variant="h3" align="center" className="py-8">
          Your cart is empty. Add some Yummy😋 dishes to your Cart .
        </Typography>
      ) : (
        <div className="w-[100%] h-auto px-2 my-9 ">
          <div className="grid grid-cols-4 gap-6">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={CDN_URL + `${item.card.info.imageId}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.card.info.name}
                    </Typography>
                    {item.card.info.description ? (
                      <Typography variant="body2" color="text.secondary">
                        {item.card.info.description}
                      </Typography>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        {item.card.info.itemAttribute.vegClassifier}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      )}
      ;
      <ToastContainer />
    </div>
  );
};

export default Cart;
