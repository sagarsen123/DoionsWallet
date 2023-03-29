import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

export default function TransferMoneyView() {
 
  const postUrl = "http://localhost:8082/transfermoney/";
  const[mytyacc,setMytyacc] = useState("");
  const[amt,setAmt] = useState("");

  const handlemytyChange = (e) =>{
    setMytyacc(e.target.value);
  }
  const handleAmtChange = (e) =>{
    setAmt(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(mytyacc)
    axios.post(postUrl,{
      "mytyAcc" : mytyacc,
      "amt" : amt
    }).then((res) => console.log(res.data))
    .catch(error=> console.log(error));
  }

  return (
    <div>TransferMoneyView
      <br/>
       <Link to="/">Switch To Wallet View</Link>    <br/>
    <Link to="/addmoney">Switch To Add Money View</Link><br/>
    <form className='d-flex flex-column' method='post' onSubmit={handleSubmit}>
        <input type="text" name='mytyacc' onChange={handlemytyChange} placeholder='Enter the Myty Account' value={mytyacc}/>
        <input type="text" name='amt' onChange={handleAmtChange} placeholder='Enter the Myty Account' value={amt}/>
        <input type="submit" />
    </form>

    </div>
  )
}
