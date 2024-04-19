import GraphCard from "./GraphCard";
import PieChart from "./Graphs/PieChart";
import VerticalChart from "./Graphs/VerticalChart";

const GraphContainer = () => {
  return (
    <div className="bottom">
      <GraphCard title="Sales Overtime" children={<VerticalChart />} />
      <GraphCard title="Analytics" children={<PieChart />} />
      <GraphCard title="Best Selling Products" children={<PieChart />} />
      <GraphCard title="Custer by Sale" children={<PieChart />} />
    </div>
  );
};
export default GraphContainer;
