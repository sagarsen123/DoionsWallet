import React from 'react'
import TransLogo from "../assets/TransactionLogo.png"
import TransactionComponent from './TransactionComponent'
import userImage from "../assets/TransImage1.jpg"
export default function TransactionView() {




  return (
    <div className='TransactionView'>
        <div className="TransheadBox">
            <img style={{margin:"1rem;"}} src={TransLogo} alt="" />
            <span>Transactions</span>
        </div>
        <div className="transactionBox">
            <TransactionComponent senderaaName={"Sourabh Balmik"} img={userImage} status={"send"} amount={245}/>
        </div>
    </div>
  )
}
