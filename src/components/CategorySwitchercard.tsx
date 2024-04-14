const CategorySwitcherCard = () => {
  return (
    <div className="catergoryswitcher_card">
      <h4>Category</h4>
      <div className="categorycard_wrapper">
        <p>Product Category</p>
        <select>
          <option>Gift Box</option>
          <option>Option 2 </option>
          <option>Option 3 </option>
          <option>Option 4 </option>
        </select>
        <Button title="Add Category" />
      </div>
    </div>
  );
};

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  const handleAddCategoryButton = () => {
    window.alert("AddbuttonCicked");
  };
  return (
    <button onClick={handleAddCategoryButton} className="addbutton">
      {title}
    </button>
  );
};
export default CategorySwitcherCard;
