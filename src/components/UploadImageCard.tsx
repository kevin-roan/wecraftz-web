import productImage from "../assets/productimage.png";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";
import { app } from "../Helpers/firebaseConfig.js";

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
    setFiledata(files[0]);
  };

  const handleImageStackClick = () => {
    window.alert("Add to Imagestack Button clicked");
  };
  const handleSubmit = () => {
    // to upload image to firestore
    // const storage = getStorage(app);
    // const storageRef = ref(storage, `products/1/productimage`);
    //
    // uploadBytes(storageRef, filedata).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
    onImageData(filedata);
  };
  return (
    <div className="imagestack_container">
      <input type="file" onChange={handleChange} />
      <button className="button" onClick={handleSubmit}>
        Submit
      </button>
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
