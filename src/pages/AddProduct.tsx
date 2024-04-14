import { UploadImageCard } from "../components";
import CategorySwitcherCard from "../components/CategorySwitchercard";

const AddProduct = () => {
  return (
    <div className="addproduct_container">
      <UploadImageCard />
      <CategorySwitcherCard />
    </div>
  );
};
export default AddProduct;
