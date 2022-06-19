import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './downlode.scss'

function Downlode() {
  return (
    <div className='land_downlode_section'>
       <div className='land_downlode_content'>
            <p className='land_downlode_content_title'>Project Management App</p>
            <h2>Download our app and start your free trail to get started today!</h2>
            <p>End-to-end payments and financial management in a single solution.</p>
            <div className='land_downlode_content_button'>
                <button><FontAwesomeIcon icon={faAppleAlt}/> <span>playstroe</span></button>
                <button><FontAwesomeIcon icon={faGooglePlay}/> <span>google stroe</span></button>
            </div>
       </div>

    </div>
  )
}

export default Downlode