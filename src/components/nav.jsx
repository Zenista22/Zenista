import React, {useState} from 'react';
import logo from '../images/zenista_logo.png';
import {Link} from 'react-scroll';

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

  return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to='/' className = "logo">
            <img src={logo} alt = ''/>
        </Link>
        <input className='menu-btn' type='checkbox' id = 'menu-btn'/>
        <label className='menu-icon' for = 'menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to='main' smooth={true} duration={1000}>Home</Link></li>
            <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
            <li><Link to='events' smooth={true} duration={1000}>Events</Link></li>
            <li><Link to='ourteam' smooth={true} duration={1000}>Our Team</Link></li>
            {/* <li><Link to='faq' smooth={true} duration={1000}>Faq's</Link></li> */}
        </ul>


    </nav>
  )
}

export default Nav;