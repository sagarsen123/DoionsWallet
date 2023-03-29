import React,{useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';

export default function AddMoneyView() {
  const postUrl = "http://localhost:8082/addmoney/";
  const[amt,setAmt] = useState("");
  const[camt,setCamt] = useState("");
  const[amtValid,setamtValid] = useState(false);
  const[camtValid,setcamtValid] = useState(false);

  const handlecamtChange = (e) =>{
    setCamt(e.target.value);
    setcamtValid(false);
  }
  const handleAmtChange = (e) =>{
    setAmt(e.target.value);
    setamtValid(false);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // if(amt!==camt )
    if(!amt)   return  setamtValid(true);
    if(!camt) return    setcamtValid(true);
    if(amt !== camt) return alert("Entered Values Does Not Matches");
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
      {amtValid && <p>This Field is Required</p>}
        <input type="text" name='camt' onChange={handlecamtChange} placeholder='Enter the Myty Account' value={camt}/>
        {camtValid && <p>This Field is Required</p>}
        <input type="submit" />
    </form>

    </div>
  )
}
