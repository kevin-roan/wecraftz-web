import { UploadImageCard } from "../components";
import CategorySwitcherCard from "../components/CategorySwitchercard";
import GeneralInformationCard from "../components/GeneralInformationCard";
import PricingStockCard from "../components/PricingStockCard";

const AddProduct = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div className="addproduct_container">
        <GeneralInformationCard />
        <UploadImageCard />
        <PricingStockCard />
        <CategorySwitcherCard />
      </div>
    </div>
  );
};

const Navbar = () => (
  <div className="navbar">
    <h4>Add New Product</h4>
    <section>
      <button className="button_primary">Save Draft</button>
      <button className="button_secondary">Add Product</button>
    </section>
  </div>
);

export default AddProduct;
