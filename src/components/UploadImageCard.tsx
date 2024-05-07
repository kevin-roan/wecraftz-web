import productImage from "../assets/productimage.png";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

const UploadImageCard = ({ onImageData }) => {
  const [filedata, setFiledata] = useState();

  const handleChange = (e) => {
    const files = e.target.files;
    onImageData(files[0]);
    setFiledata(files[0]);
  };

  return (
    <div className="uploadimage_card">
      <h5>Upload Image</h5>
      <div className="image_container">
        {filedata ? (
          <img src={URL.createObjectURL(filedata)} alt="imageonstack2" />
        ) : (
          <img src={productImage} alt="Product Image" />
        )}
        <div className="imagestack_container">
          {filedata ? (
            <img
              src={filedata && URL.createObjectURL(filedata)}
              alt="product image"
            />
          ) : (
            <img src={productImage} alt="Product Image" />
          )}

          {filedata ? (
            <img
              src={filedata && URL.createObjectURL(filedata)}
              alt="product image"
            />
          ) : (
            <img src={productImage} alt="Product Image" />
          )}
          <div className="addimagetostack">
            <input type="file" onChange={handleChange} style={{ width: 100 }} />
            <IoMdAddCircle />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadImageCard;
