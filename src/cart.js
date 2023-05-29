import { useSelector, useDispatch } from "react-redux";
import store from "./utils/store";
import { IMG_CDN_URL } from "./constants";
import { clearCart } from "./utils/cartSlice";
import { useState, useEffect } from "react";
import "./cart.css";
import { Router } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [itemPrice, setItemPrice] = useState(0);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
    setItemPrice([0])
  };
  useEffect(() => {
    TotalPrice();
   
  }, []);
  const TotalPrice = () => {
    let temp = 0;
    const price = cartItems.map((obj) => {
      return (temp += obj?.card?.info?.price / 100);
    }); 
    setItemPrice(temp);
  };

  return (
    <div className="cartItems">
      <span className="cartCount">Total order items : {cartItems.length}</span>
      <br />
      <br />
      <button className="cart" onClick={() => handleClear()}>
        ClearCart
      </button>
      <br /> <br />
      {cartItems.map((obj) => {
        return (
          <>
            <div className="all">
              <div>
                <img
                  className="cartImg"
                  src={IMG_CDN_URL + obj?.card?.info?.imageId}
                />
              </div>
              <div className="details">
                <span>{obj?.card?.info?.name}</span>
                <br />
                <br />
                <span> Price:Rs {obj?.card?.info?.price/100}/-</span>
              </div>
              <br />
            </div>
          </>
        );
      })}
      <br />
      <br />
      <span className="span">Total Price : Rs {Math.round(itemPrice)}/-</span>
      <br />
      <br />
      <button className="pay">pay Now</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Cart;
