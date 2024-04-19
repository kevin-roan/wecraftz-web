import React from "react";

interface ProductProps {
  prodName: string;
  prodPrice: string;
  prodImg: string;
}

const Product: React.FC<ProductProps> = ({ prodName, prodPrice, prodImg }) => {
  return (
    <div className="product">
      <img src={prodImg} />
      <h5>{prodName}</h5>
      <p>{prodPrice}</p>
    </div>
  );
};
export default Product;
