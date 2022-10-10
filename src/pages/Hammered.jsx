import React from 'react'
import './EventsPage.css'
import about_bg from '../images/bg3.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const Hammered = () => {
  return (
    <div className='f-body'>
    <Nav/>
        <Particle2/>
      <div id="flex" className='contents'>
          <img src={about_bg} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={about_bg} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          {/* <p class="P1">PERFUME</p>
      
          <p class="P2">Gabrielle Essence Eau De Parfum</p> 
          
          <p class="P3">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
          
          <div class="price">
              <p class="price1">$149.99</p>
              <p class="price2"><s>$169.99</s></p>
          </div> */}

          <p class="P2">Hammered!!</p>
          
          <button type="button"> <img src="./icon-cart.svg" alt="" /><p>REGISTER</p> </button>
          {/* <button type="button"> <img src="./icon-cart.svg" alt="" /><p>BACK</p> </button> */}
          </div>
      </div>
    </div>
  )
}

export default Hammered