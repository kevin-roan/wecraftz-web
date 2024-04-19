import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const GraphCard: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="graph_container_card">
      <h5>{title}</h5>
      <div className="chart_container">
        {children}
        <div className="chart_context">
          <li>Kerala</li>
          <li>Karnataka</li>
          <li>Hyderabad</li>
          <li>Hariyana</li>
          <li>Tamil Nadu</li>
        </div>
      </div>
    </div>
  );
};
export default GraphCard;
