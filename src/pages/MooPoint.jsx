import React from 'react'
import './EventsPage.css'
import moopoint from '../images/MOO_POINT.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const MooPoint = () => {
  return (
    <div className='f-body'>
    <Nav/>
        <Particle2/>
      <div id="flex" className='contents'>
          <img src={moopoint} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={moopoint} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 

          <p class="P2">M.O.O.P.O.I.N.T</p>
          
          <p class="P3">
            FORMAT:
            <ol>
              <li>3 in a Team.</li>
              <li>2 juries for judgement (judgement based on presentation skills, timing, and convincing arguments)</li>
              <li>Topics on spot</li>
              <li>Rebuttal allowed.</li>
            </ol>
            KNOCKOUTS: 
            <ol>
              <li>Knockouts - On Campus </li>
            </ol>
            FINALS:
            <ol> 
              <li>Preparation time – 5 mins</li>
              <li>Each speaker – 3 mins of speech</li>
            </ol>
          </p>
          
          <button id = "moon-button" type="button"><p><a href="https://forms.gle/FBHyPgPD3GMF6Y2B8" target="_blank">Register</a></p> </button> 
          </div>
      </div>
    </div>
  )
}

export default MooPoint