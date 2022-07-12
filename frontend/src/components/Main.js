import React from "react";
import { addToCart, removeToCart, emptyToCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const product = {
    name: "Iphone",
    price: 200000,
    country: "Australia",
  };
  return (
    <div className="App">
      <h1 style={{ color: "white", fontSize: 60 }}>React Redux Saga</h1>
      <button className="btn" onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
      <br />
      <button className="btn" onClick={() => dispatch(removeToCart())}>
        Remove to Cart
      </button>
      <br />
      <button className="btn" onClick={() => dispatch(emptyToCart())}>
        Delete to Cart
      </button>
    </div>
  );
};
export default Main;
