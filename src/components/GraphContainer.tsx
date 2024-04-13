import GraphCard from "./GraphCard";

const GraphContainer = () => {
  return (
    <div className="bottom">
      <GraphCard title="Sales Overtime" />
      <GraphCard title="Analytics" />
      <GraphCard title="Best Selling Products" />
      <GraphCard title="Custer by Sale" />
    </div>
  );
};
export default GraphContainer;
