import { useParams } from "react-router-dom";

const Breadcrumb = () => {
  let url = useParams;
  return (
    <div className="breadcrumb">
      <ul>
        <a href="/dashboard"> Dashboard ></a>
        <a href="/orders"> Orders ></a>
        <a href="/products"> Products ></a>
        <a href="/customers"> Customers </a>
      </ul>
    </div>
  );
};


export default Breadcrumb;
