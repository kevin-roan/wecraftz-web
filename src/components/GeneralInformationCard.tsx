const GeneralInformationCard = () => {
  const handleInputChange = () => {};
  return (
    <div>
      <h4>General Information</h4>
      <label> Product Name </label>
      <input type="text" onChange={handleInputChange} />
      <label>Description</label>
      <textarea onChange={handleInputChange} />
    </div>
  );
};

export default GeneralInformationCard;
