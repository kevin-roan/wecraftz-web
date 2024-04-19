import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const GraphCard: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="graph_container_card">
      <h5>{title}</h5>
      <div className="chart_container">{children}</div>
    </div>
  );
};
export default GraphCard;
