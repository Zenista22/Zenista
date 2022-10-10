import React from 'react'

function Profilebox(props) {
  return (
    <div className='p-box'>
        <div className='p-b-img'>
            <img id ='profile' src = {props.image}  alt=''/>
        </div>
        <div className='p-b-text'>
            <h2>{props.title}</h2>
            {/* <p className='p-details'>{props.text}</p> */}
        </div>
    </div>
  )
}


export default Profilebox