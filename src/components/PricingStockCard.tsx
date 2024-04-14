const PricingStockCard = () => {
  return (
    <div className="pricingstockcard">
      <h4>Pricing and Stock</h4>
      <div className="pricingstockcard_top">
        <section>
          <label>Price</label>
          <input type="number" />
        </section>
        <section>
          <label>Stock</label>
          <input type="number" />
        </section>
      </div>
      <div className="pricingstockcard_bottom">
      <label>Discounted Price</label>
      <input type="number" />
      </div>
    </div>
  );
};

export default PricingStockCard;
