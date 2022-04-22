import React from 'react'
// import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to='/about'>
          <h1>About</h1>
         {/* <FaQuestion size={20} /> */}
      </Link>
    </div>
  )
}

export default AboutIconLink
