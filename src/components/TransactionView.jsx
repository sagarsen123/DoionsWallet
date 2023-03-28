import React, { useState } from 'react'
import TransLogo from "../assets/TransactionLogo.png"
import TransactionComponent from './TransactionComponent';
import userImage from "../assets/TransImage1.jpg"
import "../Css/TransactionView.css"


export default function TransactionView() {
  const [transactions,setTransaactions]= useState([]);
  let key=1;
  const AddTransacation = ()=>{
    const user = {
      senderaaName:"Sourabh Balmik",
      imgUrl:userImage ,
      status:"send",
      amount:24,
      key: key + 1
    }
    key++;
    console.log(user)
    setTransaactions([user,...transactions]);
  }


  return (
    <div className='TransactionView'>
        <div className="TransheadBox">
            <img style={{margin:"1rem"}} src={TransLogo} alt="" />
            <span>Transactions</span>
        </div>
        <div className="transactionBox">
           {  transactions.map((element)=>{
           return  <TransactionComponent senderaaName={element.senderaaName} imgUrl={element.userImage} status={element.status} amount={element.amount}/>
           })

             
            }
        </div>
        <button onClick={AddTransacation}>
            Click me
        </button>
    </div>
  )
}
