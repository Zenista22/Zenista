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
      

          <div class="flex2"> 


          <p class="P2">POTPOURRI</p>

           
          <p class="P3">
          Round 1
          <ol>
            <li>Mode: Virtual</li>
            <li>Venue : ZOOM</li>
            <li>Event date : 29.10.2022</li>
            <li>reporting time : 10.45 am (29.10.2022)</li>
            <li>Event time: 11:00 AM - 12:00 AM</li>
          </ol>

          Round 2

          <ol>
            <li>Mode: ON CAMPUS</li> 
            <li>Venue : Beta Hall</li>
            <li>Event date : 04.11.2022</li>
            <li>reporting time : 9.00 am (04.11.2022)</li>
            <li>Event time: TBD</li>
          </ol>
          
          </p>
          
          <button id = "pot-button"  type="button"><p><a href="https://forms.gle/J83LWXgYrmsrcuVn6" target="_blank">Register</a></p></button> 
          </div>
      </div>
    </div>
  )
}

export default PotPourri