import React,{useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';

export default function AddMoneyView() {
  const postUrl = "http://localhost:8082/addmoney/";
  const[amt,setAmt] = useState("");
  const[camt,setCamt] = useState("");

  const handlecamtChange = (e) =>{
    setCamt(e.target.value);
  }
  const handleAmtChange = (e) =>{
    setAmt(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(postUrl,{
      "amt" : amt,
      "camt" : camt
    }).then((res) => console.log(res.data))
    .catch(error=> console.log(error));

  }
  return (
    <div>AddMoneyView<br/>

    <Link to="/">Switch To Wallet View</Link><br/>
    <Link to="/transfermoney">Switch To Transfer Money View</Link><br/>
    <form className='d-flex flex-column' method='post' onSubmit={handleSubmit}>
        <input type="text" name='amt' onChange={handleAmtChange} placeholder='Enter the Myty Account' value={amt}/>
        <input type="text" name='camt' onChange={handlecamtChange} placeholder='Enter the Myty Account' value={camt}/>
        <input type="submit" />
    </form>

    </div>
  )
}
