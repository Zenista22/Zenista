import React from 'react'
import './EventsPage.css'
import POTPOURRI from '../images/POTPOURRI.jpg'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const PotPourri = () => {
  return (
    <div className='f-body'>
    <Nav/>
        <Particle2/>
      <div id="flex" className='contents'>
          <img src={POTPOURRI} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={POTPOURRI} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2">

          <p class="P2">POTPOURRI</p>

          <p class="P3">
          Round 1
          <ol>
            <li>Mode: Online - Quizizz</li>
          </ol>
          Round 2
          <ol>
            <li>Mode: ON CAMPUS</li> 
            <li> 3 stages
              <ul className='list-style'>
                <li>Dumb charades</li>
                <li>Technical Pic&Talk</li>
                <li>Circuit Debugging</li>
              </ul>
            </li>
          </ol>
          
          </p>
          
          <button id = "pot-button"  type="button"><p><a href="https://forms.gle/J83LWXgYrmsrcuVn6" target="_blank">Register</a></p></button> 
          </div>
      </div>
    </div>
  )
}

export default PotPourri