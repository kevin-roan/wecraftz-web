import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app, db } from "../Helpers/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

import { addProductDetails } from "../Redux/productDataSlice.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const GeneralInformationCard = ({ imageData }) => {
  const dispatch = useDispatch();
  // fetching formdata from slice
  // const formDataList = useSelector((state) => state.addproduct.formDataList);
  // console.log(formDataList);

  const [formData, setFormData] = useState({
    productname: "",
    description: "",
  });

  const [prodId, setProdId] = useState<string | null>(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = () => {
    // const addProduct = async () => {
    //   try {
    //     const docRef = await addDoc(collection(db, "products"), {
    //       productName: formData.productname,
    //       description: formData.description,
    //     });
    //     if (docRef.id) {
    //       setProdId(docRef.id);
    //       console.log("Product added to upload list", docRef.id);
    //     }
    //   } catch (error) {
    //     console.error("Failed to add product", error);
    //   }
    // };
    // addProduct();
    dispatch(addProductDetails(formData));
  };
  return (
    <div className="generalinformationcard">
      <h4>General Information</h4>
      <label> Product Name </label>
      <input type="text" onChange={handleInputChange} id="productname" />
      <label>Description</label>
      <textarea onChange={handleInputChange} id="description" />
      <div>
        <label>Size</label>
        <select>
          <option>Inches</option>
          <option>Centimeter</option>
        </select>
        <input className="numberinput" placeholder="0" /> X
        <input className="numberinput" placeholder="0" /> Inches
      </div>
      <div>
        <label>Shape</label>
        <select>
          <option>Square</option>
          <option>Circle</option>
          <option>Triangle</option>
        </select>
      </div>
      <div className="color_switcher">
        <label>Color</label>
        <div className="colorbutton_container">
          <Color color="red" />
          <Color color="purple" />
          <Color color="violet" />
          <Color color="orange" />
          <Color color="limegreen" />
          <span className="addnewcolor">+</span>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default GeneralInformationCard;

const Color: React.FC<{ color: string }> = ({ color }) => (
  <span className="color_button" style={{ backgroundColor: color }}></span>
);
