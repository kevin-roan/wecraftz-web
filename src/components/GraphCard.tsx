interface Props {
  title: string;
}

const GraphCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="graph_container_card">
      <h5>{title}</h5>
    </div>
  );
};
export default GraphCard;
