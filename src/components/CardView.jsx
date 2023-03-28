import React from 'react'
import BalanceCard from './BalanceCard'
import TransferCard from './TransferCard'
import "../Css/CardView.css"

export default function CardView() {
  return (
    <div className='CardView'>
        <BalanceCard/>
        <TransferCard/> 
    </div>
  )
}
