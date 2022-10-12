import React from 'react'
import Profilebox from './Profilebox'

import principal from '../images/persons/principal.png'
import hod from '../images/persons/hod.png'
import venish from '../images/persons/venish2.jpg'
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
import shyam from '../images/persons/shyam.jpg'




function Ourteam() {

  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
            <div className='pro-img-3'> 
                {/* text = "contact details " */}
                <Profilebox image = {sairam_ceo} title = "SHRI.SAI PRAKASH LEO MUTHU" text="CEO" />
                <Profilebox image = {principal} title = "Dr. K PORKUMARAN" text="PRINCIPAL" />
                <Profilebox image = {hod} title = "Dr. J RAJA" text="HOD/DEAN ACADEMICS" />
            </div>
        <h1>CONVENERS</h1>
            <div className='pro-img'>
                <Profilebox image = {chitra} title = "CHITRA R" text="AP/ECE" />
                <Profilebox image = {logeswari} title = "LOGESWARI N" text="AP/ECE" />
            </div>
        </div>
        <br />
        <br />
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {janani} title = "JANANI PRIYADHARSHINI S" linkedin="janani-priyadharshini-s-ba26751ab" textLinkedin="linkedin" />
                <Profilebox image = {Shashank} title = "SASHAANK S" linkedin="sashaank-s-997a7b1ab" textLinkedin='linkedin' />
                <Profilebox image = {nishanth} title = "NISHANTH N" linkedin="nishanth-nagaraj-5865191a9" textLinkedin='linkedin' />
                <Profilebox image = {gopal} title = "GOPALRAM S" linkedin="gopalram-saravanan-4748911ab" textLinkedin="linkedin" />
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {ASRAF} title = "ASRAF S" linkedin="asraf-s-268b301ab" textLinkedin='linkedin' />
                <Profilebox image = {nirmal} title = "NIRMAL RAJA K L" linkedin="nirmalrajaloganathan4747" textLinkedin='linkedin' />
                <Profilebox image = {sarath} title = "SHARATH KUMAR R G" linkedin="sharath-kumar-r-g-4924981ab" textLinkedin="linkedin" />
                <Profilebox image = {varunapriyan} title = "VARUNAPRIYAN K" linkedin="varunapriyan-k-a647a81ab" textLinkedin="linkedin" />
                
            </div>
            <div className='pro-img'>
                <Profilebox id='shyam' image = {shyam} title = "SHYAM KUMAR" linkedin="shyamkumar-m-6627731ab" textLinkedin="linkedin" />
                <Profilebox id='thanush' image = {thanush} title = "THANUSH S" linkedin="thanush-s-5a67711ab" textLinkedin="linkedin" />


                
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>BROCHURE & EVENT POSTERS</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {Tamil_Amudhan} title = "TAMIL AMUDHAN" linkedin="tamil-amudhan-t-ab7598205" textLinkedin='linkedin' />
                <Profilebox image = {nitin} title = "SRINITHIN" linkedin="srinithin-s-b-5345a8205" textLinkedin='linkedin' />
                <Profilebox image = {GAUTHAM_S} title = "GAUTHAM SHANKAR" linkedin="igauthamshankar" textLinkedin='linkedin'/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {sriram} title = "SRIRAM A" linkedin="sriramanandan003" textLinkedin='linkedin' />
                <Profilebox image = {venish} title = "VENISH P" linkedin="venish-p" textLinkedin='linkedin' />
            </div>
        </div>
       
    </div>
  )
}

export default Ourteam