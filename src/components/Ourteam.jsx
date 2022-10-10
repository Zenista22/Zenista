import React from 'react'
import Profilebox from './Profilebox'

import principal from '../images/persons/principal.png'
import hod from '../images/persons/hod.png'
import venish from '../images/persons/venish.png'
import sarath from '../images/persons/SHARATH KUMAR RG.png'
import Shashank from '../images/persons/Shashank.png'
import nishanth from '../images/persons/nishanth.jpeg'
import nirmal from '../images/persons/NIRMAL RAJA K L.png'
import gopal from '../images/persons/gopal.png'
import ASRAF from '../images/persons/ASRAF S.png'
import Tamil_Amudhan from  '../images/persons/Tamil Amudhan.png'
import nitin from  '../images/persons/nitin.png'
import GAUTHAM_S from  '../images/persons/GAUTHAM S.png'
import logeswari from '../images/persons/logeswari.png'
import chitra from '../images/persons/chitra.png'
import janani from '../images/persons/janani.png'
import thanush from '../images/persons/thanush.png'
import varunapriyan from '../images/persons/varunapriyan.png'
import sairam_ceo from '../images/persons/sairam_ceo.png'
import sriram from '../images/persons/sriram.png'




function Ourteam() {
  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
            <div className='pro-img-3'> 
                {/* text = "contact details " */}
                <Profilebox image = {sairam_ceo} title = "Sai Prakash Leo Muthu (CEO)"/>
                <Profilebox image = {principal} title = "Dr. K Porkumaran (Principal)" />
                <Profilebox image = {hod} title = "Dr. J Raja (HOD)"/>
            </div>
            <div className='pro-img'>
                <Profilebox image = {chitra} title = "Chitra R (Conveners)" />
                <Profilebox image = {logeswari} title = "Logeswari N (Conveners)" />
            </div>
        </div>


        
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {nirmal} title = "Nirmal Raja K L" />
                <Profilebox image = {Shashank} title = "Sashaank S" />
                <Profilebox image = {nishanth} title = "Nishanth N" />
                <Profilebox image = {gopal} title = "Gopalram S" />
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {ASRAF} title = "Asraf S" />
                <Profilebox image = {janani} title = "Janani Priyadharshini S" />
                <Profilebox image = {thanush} title = "Thanush S" />
                <Profilebox image = {varunapriyan} title = "Varunapriyan K" />
                
            </div>
            {/* <div className='pro-img-4'>
                <Profilebox image = {ASRAF} title = "Asraf S" />
                <Profilebox image = {janani} title = "Janani Priyadharshini S" />
                
            </div> */}
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>BROCHURE & EVENT POSTERS</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {Tamil_Amudhan} title = "Tamil Amudhan" text = "contact details "/>
                <Profilebox image = {nitin} title = "Sri Nithin" text = "contact details "/>
                <Profilebox image = {GAUTHAM_S} title = "Gaudham Shankar" text = "contact details "/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {sriram} title = "SRIRAM A" text = "contact details "/>
                <Profilebox image = {venish} title = "VENISH P" text = "contact details "/>
                <Profilebox image = {sarath} title = "SHARATH KUMAR R G" text = "contact details "/>
            </div>
        </div>
       
    </div>
  )
}

export default Ourteam