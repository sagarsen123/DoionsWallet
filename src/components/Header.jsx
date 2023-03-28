import React from 'react'
import '../Css/Header.css'

export default function Header(props) {
  const {logo,Username} = props;
  {console.log(props)}
  return (
    <header className='head'>
        <div className="logoContainer">
           <img src={logo} alt="UserDp" />
        </div>
        <div className="UserNameBox">
           {Username}
           
        </div>
    </header>
  )
}
