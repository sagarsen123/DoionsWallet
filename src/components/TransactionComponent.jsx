import React from 'react'
import "../Css/TransactionComponent.css"

export default function TransactionComponent(props) {
  const{senderaaName,imgUrl,status,amount}=props;  

  let value = status==="send"? "-" : "+" ;;
  value+= amount;



  return (
    <div className="TransactionComponent">
        <div className="userImgBox">
            <img src={imgUrl} alt=""/>
        </div>
        <div className="TransDetails">
                <div className="userNameBox">
                    {senderaaName}
                </div>
                <div className="amontBox" style={{color: status!=="send"? "#74AB00":"red"}}>
                    {value}
                </div>
        </div>
       
    </div>
  )
}
