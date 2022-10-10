import React from 'react'
import './EventsPage.css'
import thegreatwhites from '../images/THE GREAT WHITES.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const TheGreatWhites = () => {
  return (
    <div className='f-body'>
    <Nav/>
        <Particle2/>
      <div id="flex" className='contents'>
          <img src={thegreatwhites} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={thegreatwhites} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          
          <p class="P2">The Great Whites</p>
          
            <p class="P3">
              <ol>
                <li>A team should consist 3 members</li>
                <li>2 Rounds will be conducted to shortlist the teams</li>
                <li>The first round will be conducted in the zoom meeting</li>
                <li>Shortlisted teams will attend the final round (Offline) at the given venue</li>
                <li>7 minutes for marketing your product 3 minutes for QnA</li>
              
              </ol>
            </p>

          <button id = "shark-button" type="button"><p><a href="https://forms.gle/CRiAmoK2kmvnCT427" target="_blank">Register</a></p> </button> 
          </div>
      </div>
    </div>
  )
}

export default TheGreatWhites