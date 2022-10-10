import React from 'react'
// import Card from './Card'
import { Link } from 'react-router-dom'


function Eventbox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src = {props.image}  alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p className='details'>{props.text}</p>
            <br />
            <br />

            <Link to={props.link}><div className='event-button'> Know More...</div></Link>
        </div>
        <div className='a-b-button'>
          {/* <Card r1 = {props.r1} r2 = {props.r2} r3 = {props.r3} r4 = {props.r4} r5 = {props.r5} /> */}
        </div>
    </div>
  )
}

export default Eventbox