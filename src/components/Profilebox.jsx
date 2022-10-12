import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Profilebox(props) {
  return (
    <div className='p-box'>
        <div className='p-b-img'>
            <img id ='profile' src = {props.image}  alt=''/>
        </div>
        <div className='p-b-text'>
            <h2>
              {props.title}
              <br />
              {props.text}
            </h2>
            <a href={`https://www.linkedin.com/in/${props.linkedin}`} target="_blank"><h4><i class="fa-brands fa-linkedin"></i>{props.textLinkedin}</h4></a>
        </div>
    </div>
  )
}


export default Profilebox