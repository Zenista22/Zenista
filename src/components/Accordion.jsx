// import React from 'react'
// import Comments from './Comments'
// import "./Accordion.css"

// function Accordion() {
//   return (
//     <div id  = "faq">
//         <h1 className='acc-head'>FAQ's</h1>
//         <Comments ques = "this is question" ans = "this is answer" />
//         <Comments ques = "this is question" ans = "this is answer" />
//     </div>
//   )
// }

// export default Accordion

import React from 'react'
import './footer.css'
import logo from '../images/zenista_logo.png';
import instagram_logo from '../images/instagram-logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'


const Accordion = () => {
  return (
    <>
    <hr />
    <div className='footer-grid-container'>
      <div className='footer-grid-item-1'>
      <img className='footer-logo' src={logo} alt = ''/>
      <a className='link-href' href="https://instagram.com/zenista2k22?igshid=YmMyMTA2M2Y=" target="_blank">
        <img className='footer-instagram-link' src={instagram_logo} alt="instagram" />
      </a>
      </div>
      <div className='footer-grid-item-2'>
        <h2>LOCATION & CONTACT</h2>
        <p> 
        <table>
          <tr>
            <td>
          <FontAwesomeIcon icon={faEarthAsia} />
            </td>
            &nbsp;
            &nbsp;
            <td>
            Sai Leo Nagar,West Tambaram, <br />
            Poonthandalam, Village, Chennai, <br />
            Tamil Nadu 600044
            </td>
          </tr>
          <br />
          <tr>
            <td>
           <FontAwesomeIcon icon={faEnvelope} />
            </td>
            &nbsp;
            &nbsp; 
            <td>
            SASHAANK S <br />
            +91-9445375314 (for queries)
            </td>
          </tr>
        </table>    
        </p>
      </div>
      <div className='footer-grid-item-3'>
        <h2>ABOUT COLLEGE</h2>
        <p>
        Sri Sairam Engineering College, Chennai, established in the year 1995 by MJF.Ln.Leo Muthu, Chairman of Sapthagiri Educational Trust, is a non-profitable and a non-minority institution. A well-defined vision, highly committed mission and a dedicated leadership facilitate Sri Sairam Engineering College to be among the best of educational institutions in the country.
        </p>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Accordion;