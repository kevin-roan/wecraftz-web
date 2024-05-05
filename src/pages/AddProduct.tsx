import { UploadImageCard } from "../components";
import CategorySwitcherCard from "../components/CategorySwitchercard";
import GeneralInformationCard from "../components/GeneralInformationCard";
import PricingStockCard from "../components/PricingStockCard";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { startUpload } from "../Redux/productDataSlice.js";
import { useSelector } from "react-redux";

import { uploadBytes } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";

import { app, db } from "../Helpers/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

const AddProduct = () => {
  const [imageData, setImageData] = useState(null);

  // lifting the state up
  const handleImageData = (data) => {
    setImageData(data);
    console.log("akjdk", data);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar imageData={imageData} />
      <div className="addproduct_container">
        <GeneralInformationCard imageData={imageData} />
        <UploadImageCard onImageData={handleImageData} />
        <PricingStockCard />
        <CategorySwitcherCard />
      </div>
    </div>
  );
};

const Navbar = ({ imageData }) => {
  const dispatch = useDispatch();
  const handleAddproduct = () => {
    dispatch(startUpload());
  };

  const newprodData = useSelector((state) => state.addproduct.productData);
  const isUpload = useSelector((state) => state.addproduct.isUploading);
  console.log("new prduct name", newprodData.productname);

  const productName = newprodData.productname;
  const description = newprodData.description;
  const price = newprodData.price;
  const stock = newprodData.stock;

  useEffect(() => {
    // Define addProduct function inside useEffect
    const addProduct = async () => {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          productName: productName,
          description: description,
          price: price,
          stock: stock,
        });
        // may be docRef.id is not null

        if (docRef.id !== null && docRef.id !== undefined) {
          console.log("Product added to upload list", docRef.id);
          const prodId = docRef.id;
          uploadProdImage(imageData, prodId);
        }
      } catch (error) {
        console.error("Failed to add product", error);
      }
    };

    // Call addProduct function if isUpload is true

    const uploadProdImage = (filedata, prodId) => {
      const storage = getStorage(app);
      if (prodId && filedata) {
        const storageRef = ref(storage, `products/${prodId}/productimage`);
        uploadBytes(storageRef, filedata).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          window.alert("Added New Prodcut");
        });
      } else {
        window.alert("Invalid docId");
      }
    };
    if (isUpload) {
      addProduct();
    }
    // production notes => add here, image and product details to update database without reloading the page
  }, [isUpload]);

  return (
    <div className="navbar">
      <h4>Add New Product</h4>
      <section>
        <button className="button_primary">Save Draft</button>
        <button className="button_secondary" onClick={handleAddproduct}>
          Add Product
        </button>
      </section>
    </div>
  );
};

export default AddProduct;
