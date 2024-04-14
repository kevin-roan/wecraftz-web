import productImage from "../assets/productimage.png";
import { IoMdAddCircle } from "react-icons/io";

const UploadImageCard = () => {
  return (
    <div className="uploadimage_card">
      <h5>Upload Image</h5>
      <div className="image_container">
        <img src={productImage} alt="Product Image" />
        <ImageStack />
      </div>
    </div>
  );
};

const ImageStack = () => {
  const handleImageStackClick = () => {
    window.alert("Add to Imagestack Button clicked");
  };
  return (
    <div className="imagestack_container">
      <img src={productImage} alt="imageonstack0" />
      <img src={productImage} alt="imageonstack1" />
      <img src={productImage} alt="imageonstack2" />
      <div className="addimagetostack" onClick={handleImageStackClick}>
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default UploadImageCard;
