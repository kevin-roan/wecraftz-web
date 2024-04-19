import Product from "./Product";

const ProductContainer = () => {
  return (
    <div className="product_container">
      <Product
        prodName="Product 1"
        prodImg="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png"
        prodPrice="100Rs"
      />
      <Product
        prodName="Product 1"
        prodImg="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png"
        prodPrice="100Rs"
      />{" "}
      <Product
        prodName="Product 1"
        prodImg="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png"
        prodPrice="100Rs"
      />{" "}
      <Product
        prodName="Product 1"
        prodImg="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png"
        prodPrice="100Rs"
      />{" "}
      <Product
        prodName="Product 1"
        prodImg="https://s3.amazonaws.com/www-inside-design/uploads/2018/12/The-product-of-you-810x810.png"
        prodPrice="100Rs"
      />{" "}
    </div>
  );
};

export default ProductContainer;
