const Table = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Product Details</th>
            <th>Date</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sale</th>
            <th>Total Income</th>
          </tr>
        </thead>
        <tbody>
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
          <TableContent />
        </tbody>
      </table>
    </div>
  );
};

const TableContent = () => (
  <tr>
    <td>1</td>
    <td>
      <img src="" alt="product image" />
      <p>Product name</p>
      <p>Product Desc</p>
    </td>
    <td>1/3/24</td>
    <td>86</td>
    <td>₹ 144/-</td>
    <td>
      <div>24 Units</div>
    </td>
    <td>
      <div>24 Units</div>
    </td>
  </tr>
);

const Navbar = () => {
  return <h2>Navbar</h2>;
};

export default Table;
