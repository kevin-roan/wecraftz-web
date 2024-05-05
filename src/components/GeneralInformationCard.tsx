import { setData } from "../Redux/productDataSlice.js";
import { ChangeEvent } from "react";

import { useDispatch } from "react-redux";

const GeneralInformationCard = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(setData({ [id]: value }));
  };
  return (
    <div className="generalinformationcard">
      <h4>General Information</h4>
      <label> Product Name </label>
      <input type="text" onChange={handleInputChange} id="productname" />
      <label>Description</label>
      <input
        type="text"
        onChange={handleInputChange}
        id="description"
        style={{ height: 100 }}
      />
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
      </div>
    </div>
  );
};

export default GeneralInformationCard;

const Color: React.FC<{ color: string }> = ({ color }) => (
  <span className="color_button" style={{ backgroundColor: color }}></span>
);
