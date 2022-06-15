import { faAngleDown,  faNavicon, faXmark  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react'
import './navigation.scss'

function Navigation() {
    const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <div className='nav_section'>
        <div className='nav_logo_area'>
            <h5>bappy</h5>
        </div>
        <div className='nav_content'>
            <div className='nav_links'>
                <ul>
                    <li><a href='#product'>product <FontAwesomeIcon icon={faAngleDown}/></a></li>
                    <li><a href='#template'>template <FontAwesomeIcon icon={faAngleDown}/></a></li>
                    <li><a href='#blog'>blog</a></li>
                    <li><a href='#pricing'>pricing</a></li>
                </ul>
            </div>
            <div className='nav_buttons_area'>
                <a href='#sign_in' className='nav_button_sign_in'>sign in</a>
                <button className='nav_button_free' type='button'>start free</button>
            </div>
            <div className='nav_menu_container'>
            {toggleMenu ? <FontAwesomeIcon icon={faXmark} onClick={()=> setToggleMenu(false)}/> :  <FontAwesomeIcon icon={faNavicon} onClick={()=> setToggleMenu(true)}/> }
               {
                toggleMenu && (
                    <div className='nav_menu_content'>
                         <div className='nav_menu_links'>
                            <ul>
                                <li><a href='#product'>product <FontAwesomeIcon icon={faAngleDown}/></a></li>
                                <li><a href='#template'>template <FontAwesomeIcon icon={faAngleDown}/></a></li>
                                <li><a href='#blog'>blog</a></li>
                                <li><a href='#pricing'>pricing</a></li>
                            </ul>
                        </div>
                        <div className='nav_menu_buttons_area'>
                            <a href='#sign_in' className='nav_button_sign_in'>sign in</a>
                            <button className='nav_button_free' type='button'>start free</button>
                        </div> 
                    </div>
                )
               }
            </div>
        </div>
    </div>
  )
}

export default Navigation