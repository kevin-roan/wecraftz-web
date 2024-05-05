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

import {
  addProductDetails,
  addStockDetails,
} from "../Redux/productDataSlice.js";
import { getDatabase, set } from "firebase/database";
import { app, db } from "../Helpers/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

const AddProduct = () => {
  const [imageData, setImageData] = useState(null);

  const productData = useSelector((state) => state.addproduct.formDataList);
  const stockData = useSelector((state) => state.addproduct.stockDataList);
  // lifting the state up
  const handleImageData = (data) => {
    setImageData(data);
  };
  useEffect(() => {
    console.log(
      "all the data",
      "image data=>",
      imageData,
      "formdata=>",
      productData
    );
  });
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
  const [prodId, setProdId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleAddproduct = () => {
    dispatch(startUpload());
  };

  const isUpload = useSelector((state) => state.addproduct.isUploading);
  const formDataList = useSelector((state) => state.addproduct.formDataList);
  const productName =
    formDataList.length > 0 ? formDataList[0].productname : "";
  const description =
    formDataList.length > 0 ? formDataList[0].description : "";

  const stockDataList = useSelector((state) => state.addproduct.stockDataList);
  console.log(stockDataList, "stock is ");
  const price = stockDataList.length > 0 ? stockDataList[0].price : "";

  const stock = stockDataList.length > 0 ? stockDataList[0].stock : "";

  useEffect(() => {
    const addProduct = async () => {
      try {
        const docRef = await addDoc(collection(db, "products"), {
          productName: productName,
          description: description,
          price: price,
          stock: stock,
        });
        if (docRef.id) {
          setProdId(docRef.id);
          console.log("Product added to upload list", docRef.id);
          uploadProdImage(imageData);
        }
      } catch (error) {
        console.error("Failed to add product", error);
      }
    };

    const uploadProdImage = (filedata) => {
      const storage = getStorage(app);
      if (prodId) {
        const storageRef = ref(storage, `products/${prodId}/productimage`);
        uploadBytes(storageRef, filedata).then((snapshot) => {
          console.log("Uploaded a blob or file!");
          window.alert("Added New Prodcut");
        });
      } else {
        window.alert("Invalid Id");
      }
    };
    if (isUpload) {
      addProduct();
    }
  }, [isUpload, productName, description, imageData]);

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
