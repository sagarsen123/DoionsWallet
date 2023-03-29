import React from 'react'
import { Link } from 'react-router-dom'
export default function TransferMoneyView() {
  return (
    <div>TransferMoneyView
      <br/>
       <Link to="/">Switch To Wallet View</Link>    <br/>
    <Link to="/addmoney">Switch To Add Money View</Link>
    </div>
  )
}
