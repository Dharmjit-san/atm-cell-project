import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
function ManageCards() {
  const [startCard, setStartCard] = useState("");
  const [endCard, setEndCard] = useState("");
  const [cardType, setCardType] = useState("");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    const res = await axios.get("http://localhost:5000/api/card/list");

    setCards(res.data);
  };

  const addCards = async () => {
    await axios.post("http://localhost:5000/api/card/add", {
      startCard,
      endCard,
      cardType,
    });

    alert("Cards Added");

    setStartCard("");
    setEndCard("");
    setCardType("");

    loadCards();
  };

  const deleteCard = async (id) => {
    await axios.delete(`http://localhost:5000/api/card/delete/${id}`);

    alert("Card Deleted");

    loadCards();
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />
        <div className="container mt-4">
          <h4>Manage Cards</h4>

          <div className="card p-3 mb-4">
            <input
              className="form-control mb-2"
              placeholder="Start Card Number"
              value={startCard}
              onChange={(e) => setStartCard(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="End Card Number"
              value={endCard}
              onChange={(e) => setEndCard(e.target.value)}
            />

            <select
              className="form-control mb-2"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">Select Card Type</option>
              <option>RuPay EMV Insta</option>
              <option>KCC EMV Insta</option>
            </select>

            <button className="btn btn-success" onClick={addCards}>
              Add Cards
            </button>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Card Number</th>
                <th>Type</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cards.map((c, index) => (
                <tr key={c._id}>
                  <td>{index + 1}</td>
                  <td>{c.cardNumber}</td>
                  <td>{c.cardType}</td>
                  <td>{c.branch}</td>
                  <td>{c.status}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCard(c._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ManageCards;
