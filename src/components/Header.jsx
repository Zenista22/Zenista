import React from 'react'

function Header() {
  return (
    <div id = 'main'>
        <div className='name'>
            <h1>DEPARTMENT</h1>
            <span id = 'of'>OF</span> 
            <h1>ECE</h1>
            <h2><span>PRESENTS</span></h2>
            <h1 id = 'zen'>ZENISTA</h1>
            {/* <p className='details'>
              Technology is best when it brings people together
            </p> */}
            <div className='header-btns'>
                {/* <a href='#' className='header-btn'>REGISTER</a> */}
            </div>
        </div>
    </div>

  )
}

export default Header