import productImage from "../assets/productimage.png";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

const UploadImageCard = ({ onImageData }) => {
  return (
    <div className="uploadimage_card">
      <h5>Upload Image</h5>
      <div className="image_container">
        <img src={productImage} alt="Product Image" />
        <ImageStack onImageData={onImageData} />
      </div>
    </div>
  );
};

const ImageStack = ({ onImageData }) => {
  const [filedata, setFiledata] = useState();

  const handleChange = (e) => {
    const files = e.target.files;
    onImageData(files[0]);
    setFiledata(files[0]);
  };

  return (
    <div className="imagestack_container">
      <img
        src={filedata && URL.createObjectURL(filedata)}
        alt="imageonstack0"
      />
      <img src={productImage} alt="imageonstack2" />
      <div className="addimagetostack">
        <input type="file" onChange={handleChange} style={{ width: 100 }} />
        <IoMdAddCircle />
      </div>
    </div>
  );
};

export default UploadImageCard;
