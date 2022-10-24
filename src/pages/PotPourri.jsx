import React from 'react'
import './EventsPage.css'
import POTPOURRI from '../images/POTPOURRI.png'

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
      

          <div id= 'port' class="flex2">

          <p class="P2">POTPOURRI</p>

          <p class="P3">
          3 members per team 
          [ VIRTUAL - 29/10/2022]<br/>
          <li>PRELIMINARY ROUND (Technical Quiz conducted in Mentimeter)</li>
          [ ON CAMPUS - 04/11/2022 ] 

          <br/>
          ROUND 1 : AMPLIFY 📢
          <ul>
            <li> Dumb charades - Technical</li>
          </ul>
          ROUND 2 : SYNTAX ERA 👀
          <ol>
            <li>Pic & Talk - Technical. </li>
            <li>Each team must explain about the picture shown for atleast 2 minutes. </li> 
          </ol>
          ROUND 3 : DEATH BY DESIGN ☠️
          <ol>
            <li>Circuit debugging</li>
            <li>Each team must debug the circuit with the help of reference picture given</li>
            <li> Electronic components will be provided to you</li>
          </ol>          
          </p>
          
          <button id = "pot-button"  type="button"><p><a href="https://forms.gle/J83LWXgYrmsrcuVn6" target="_blank">Register</a></p></button> 
          </div>
      </div>
    </div>
  )
}

export default PotPourri