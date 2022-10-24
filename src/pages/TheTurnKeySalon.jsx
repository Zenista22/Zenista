import React from 'react'
import './EventsPage.css'
import theTurnkeySalon from '../images/the_turnkey_salon.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const TheTurnKeySalon = () => {
  return (
    <div className='f-body'>
      <Nav/>
      <Particle2/>
          <div id="flex" className='contents'>
            <img src={theTurnkeySalon} alt="Image of perfume" height={460} class="image-dsktp" />
            <img src={theTurnkeySalon} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
        

            <div class="flex2"> 

          <p class="P2">THE TURNKEY SALON</p>

          
          <p class="P3">
          * 3 members in a team
          <ol>
            * DAY 1 [VIRTUAL]
            <li>Qualification Round : 
              <ul>
                <li>- Mode: Online</li>
                <li>- Website: Quizizz</li>
              </ul>
            </li>
            * DAY 2 [ON-CAMPUS]
            <li>Round 1: Pick your Poison!☠
              <ul>
                <li>- Teams have to pick a Category; 5 Questions under each one of them.</li>
              </ul>
            </li>
            <li>Round 2: Lightning McQueen⚡
              <ul>
                <li>- Mode : Rapid Fire</li>
              </ul>
            </li>
            <li>Round 3: Ace in the Hole! 
              <ul>
                <li>- Basis : Clues through trivia & images.</li>
              </ul>
            </li>
          </ol>
          </p>
            
            <button id = "turn-button" type="button"><p><a href="https://forms.gle/RJTHs8rAkejbUyFA6" target="_blank">Register</a></p> </button>
            
            </div>
        </div>
      </div>

  )
}

export default TheTurnKeySalon