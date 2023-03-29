import React from "react";
import "../Css/TransferCard.css";
import TransferLogo from "../assets/Transfer.png"

export default function TransferCard() {
  return (
    <div className="TransferCard">
      <div className="tCardHead">
      <span>TRANSFER MONEY</span>
      </div>
      <div className="currencySBox">
        <img src={TransferLogo} alt="" />
      </div>

      <div className="TransferMoney_Box">
        <button className="btn btn-sm btn-dark addMoney-btn" style={{width:"80%"}}>Transfer</button>
      </div>
    </div>
  );
}
