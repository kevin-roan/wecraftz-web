const GeneralInformationCard = () => {
  const handleInputChange = () => {};
  return (
    <div className="generalinformationcard">
      <h4>General Information</h4>
      <label> Product Name </label>
      <input type="text" onChange={handleInputChange} />
      <label>Description</label>
      <textarea onChange={handleInputChange} />
      <div>
        <label>Size</label>
        <select>
          <option>Inches</option>
          <option>Centimeter</option>
        </select>
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
        <Color />
        <Color />
        <Color />
      </div>
    </div>
  );
};

export default GeneralInformationCard;

const Color = () => (
  <span className="color_button" style={{ backgroundColor: "red" }}></span>
);
