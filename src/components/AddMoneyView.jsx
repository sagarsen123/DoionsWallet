import React from 'react'
import {Link} from "react-router-dom"

export default function AddMoneyView() {
  return (
    <div>AddMoneyView

    <Link to="/">Switch To Wallet View</Link><br/>
    <Link to="/transfermoney">Switch To Transfer Money View</Link>
    </div>
  )
}
