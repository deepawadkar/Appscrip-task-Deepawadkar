import React, { useState } from 'react'
import './style.css'

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const navopenhandler = () => {
        setOpenNav(!openNav);
    }
  return (
    <div className='main-header'>
    <header>
     <div className="toggler">
     <i className={`bi bi-${openNav?'x-lg':'list'}`} onClick={navopenhandler}></i>
      <i class="bi bi-apple"></i>
     </div>
     <h1>LOGO</h1>
     <div className="icons">
        <i className='bi bi-search'></i>
        <i className='bi bi-heart'></i>
        <i className='bi bi-bag'></i>
        <i className='bi bi-user'></i>
        <select name="lang" id="lang">
            <option value="en">ENG</option>
            <option value="hn">HINDI</option>
        </select>
     </div>
    </header>
    <nav className={openNav?'openNav':null}>
        <ul>
            <li><a href="/">shop</a></li>
            <li><a href="/">skills</a></li>
            <li><a href="/">stories</a></li>
            <li><a href="/">about</a></li>
            <li><a href="/">contact us</a></li>
        </ul>
        
    </nav>
    </div>
  )
}

export default Header
