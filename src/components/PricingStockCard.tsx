import { useState, useEffect } from "react";
import { addStockDetails } from "../Redux/productDataSlice.js";
import { setData } from "../Redux/productDataSlice.js";
import { useDispatch } from "react-redux";

const PricingStockCard = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(setData({ [id]: value }));
  };
  return (
    <div className="pricingstockcard">
      <h4>Pricing and Stock</h4>
      <div className="pricingstockcard_top">
        <section>
          <label>Price</label>
          <input type="number" onChange={handleChange} id="price" />
        </section>
        <section>
          <label>Stock</label>
          <input type="number" onChange={handleChange} id="stock" />
        </section>
      </div>
      <div className="pricingstockcard_bottom">
        <label>Discounted Price</label>
        <input type="number" onChange={handleChange} id="discounted_price" />
      </div>
    </div>
  );
};

export default PricingStockCard;
