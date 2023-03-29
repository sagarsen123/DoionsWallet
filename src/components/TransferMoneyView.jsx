import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

export default function TransferMoneyView() {
 
  const postUrl = "http://localhost:8082/transfermoney/";
  const[mytyacc,setMytyacc] = useState("");
  const[amt,setAmt] = useState("");
  const[amtValid,setamtValid] = useState(false);
  const[mytyValid,setmytyValid] = useState(false);

  
  const handlemytyChange = (e) =>{
    setmytyValid(false);
    setMytyacc(e.target.value);
  }
  const handleAmtChange = (e) =>{
    setamtValid(false);
    setAmt(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!amt) return setamtValid(true);
    else if(!mytyValid) return setmytyValid(true);
    else {
      
      axios.post(postUrl,{
        "mytyAcc" : mytyacc,
        "amt" : amt
      }).then((res) => console.log(res.data))
      .catch(error=> console.log(error));
    }
  }

  return (
    <div>TransferMoneyView
      <br/>
       <Link to="/">Switch To Wallet View</Link>    <br/>
    <Link to="/addmoney">Switch To Add Money View</Link><br/>
    <form className='d-flex flex-column' method='post' onSubmit={handleSubmit}>
        <input type="text" name='mytyacc' onChange={handlemytyChange} placeholder='Enter the Myty Account' value={mytyacc}/>
        {mytyValid && <p>This Field is Required</p>}
        <input type="text" name='amt' onChange={handleAmtChange} placeholder='Enter the Amount To Add' value={amt}/>
        {amtValid && <p>This Field is Required</p>}
        <input type="submit" />
    </form>

    </div>
  )
}
