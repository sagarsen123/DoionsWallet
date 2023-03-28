import React from 'react'
import CardView from './CardView'
import TransactionView from './TransactionView';

export default function WalletView() {
    const userBalance = "10,000";
  return (
    <div className='walletview'>
        <CardView userBalance={userBalance}/>
        <TransactionView/>
    </div>
  )
}
