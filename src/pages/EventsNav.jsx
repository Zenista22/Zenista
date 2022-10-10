import React, {useState} from 'react';
import logo from '../images/zenista_logo.png';
import {Link} from 'react-scroll';

import { useNavigate } from "react-router-dom";

function Nav() {

    const [nav, setnav] = useState(false);

    const changeBackground = () =>{
        if(window.screenY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='/' className = "logo">
            <img onClick={handleClick} src={logo} alt = ''/>
        </Link>
        <input className='menu-btn' type='checkbox' id = 'menu-btn'/>
        <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='events' onClick={handleClick} >BACK</Link></li>
        </ul>


    </nav>
  )
}

export default Nav;