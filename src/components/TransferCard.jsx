import React from "react";
import "../Css/TransferCard.css";
export default function TransferCard() {
  return (
    <div className="TransferCard">
      <div className="tCardHead">
        <h2>Balance</h2>
      </div>
      <div className="currencySBox">
        10,000
      </div>

      <div className="TransferMoney_Box">
        <button className="btn btn-dark addMoney-btn">Transfer</button>
      </div>
    </div>
  );
}
