import React from 'react'
import "../Css/BalanceCard.css"

export default function BalanceCard() {
  return (
    <div className='BalanceCard'>
        <div className="bCardHead">
            <h2>Balance</h2>
        </div>
        <div className="BalanceBox">
            <div className="currencySBox">
                
            </div>
            <div className="CurrentAmountBox">
                10,000
            </div>
        </div>
        <div className="AddMoney_Box">
            <button className="btn btn-dark addMoney-btn">
                Add Money
            </button>
        </div>
    </div>
  )
}
