function CardsList() {
  return (
    <div className="container mt-4">

      <h3>ATM Cards List</h3>

      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Branch</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>123456789</td>
            <td>RuPay</td>
            <td>Sangrur</td>
            <td>Available</td>
            <td>
              <button className="btn btn-success btn-sm">
                Transfer
              </button>
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default CardsList;