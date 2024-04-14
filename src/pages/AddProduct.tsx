import { UploadImageCard } from "../components";
import CategorySwitcherCard from "../components/CategorySwitchercard";
import GeneralInformationCard from "../components/GeneralInformationCard";
import PricingStockCard from "../components/PricingStockCard";

const AddProduct = () => {
  return (
    <div className="addproduct_container">
      <UploadImageCard />
      <CategorySwitcherCard />
      <PricingStockCard />
      <GeneralInformationCard />
    </div>
  );
};
export default AddProduct;
