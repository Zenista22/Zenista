import React from 'react'
import './EventsPage.css'
import about_bg from '../images/GAME OF BINGERS.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const GameOfBingers = () => {
  return (
    <div className='f-body'>
    <Nav/>
        <Particle2/>
      <div id="flex" className='contents'>
          <img src={about_bg} alt="Image of event" height={460} class="image-dsktp" />
          <img src={about_bg} alt="Image of event" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 

          <p class="P2">Game Of Bingers</p>

          <p class="P3">
          <h2>VIRTUAL</h2>
            <ol>
              
              <li>3 members in a team</li>
              <li>Qualifier Round - Online</li>
              <li>Website - Quizizz</li>
            </ol>
            <h2>ON-CAMPUS</h2>
            <ol>
              
              <li>Shortlisted Teams will attend the finale On Campus</li>
              <li>Finale - 3 stages
                <ul>
                  <li>- Rhapsody</li>
                  <li>- Framed.wtf</li>
                  <li>-  Better Call All</li>
                </ul>
              </li>
            </ol>
          </p>
          
          <button id = "pot-button" type="button"><p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfBQ9ZDIx9XMwsyq99kOF0jCj_9ydeWTXRpDJvu2Fm6MeUgow/viewform?usp=sf_linkx" target="_blank">Register</a></p> </button>
          {/* <button type="button"> <img src="./icon-cart.svg" alt="" /><p>BACK</p> </button> */}
          </div>
      </div>
    </div>
  )
}

export default GameOfBingers