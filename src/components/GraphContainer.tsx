import GraphCard from "./GraphCard";
import PieChart from "./Graphs/PieChart";
import VerticalChart from "./Graphs/VerticalChart";
import ProductContainer from "./ProductContainer";
import DoughnutCart from "./Graphs/DoughnutCart.tsx";

const GraphContainer = () => {
  return (
    <div className="bottom">
      <GraphCard title="Sales Overtime" children={<VerticalChart />} />
      <GraphCard title="Analytics" children={<DoughnutCart />} />
      <GraphCard
        title="Best Selling Products"
        children={<ProductContainer />}
      />
      <GraphCard
        title="Custer by Sale"
        children={
          <div style={{ display: "flex", flexDirection: "row", gap: "5rem" }}>
            <PieChart />
            <div className="chart_context">
              <li>Kerala</li>
              <li>Karnataka</li>
              <li>Hyderabad</li>
              <li>Hariyana</li>
              <li>Tamil Nadu</li>
            </div>
          </div>
        }
      />
    </div>
  );
};
export default GraphContainer;
