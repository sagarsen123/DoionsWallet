import React from 'react'
import "../Css/BalanceCard.css"
import CurrencyImg from "../assets/RupeeSign.png"
import { Link } from 'react-router-dom'
export default function BalanceCard() {
  return (
    <div className='BalanceCard'>
        <div className="bCardHead">
            <span>BALANCE</span>
        </div>
        <div className="BalanceBox">
            <div className="currencySBox">
                <img src={CurrencyImg} alt="" />
            </div>
            <div className="CurrentAmountBox">
                10,000
            </div>
        </div>
        <div className="AddMoney_Box">
            <button className="btn btn-sm btn-dark addMoney-btn" style={{width:"80%"}}>
            <Link to="/addMoney">Add Money</Link>    
            </button>
        </div>
    </div>
  )
}
