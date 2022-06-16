import React from 'react'
import Navigation from '../../component/Navigation/Navigation'
import topImg from '../../assets/header_img.png'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='land_header_contener'>
        <Navigation/>
        <div className='land_header_contener_section'>
            <div className='land_header_contener_section_left'>
                <p>Product Growth Solution in Single Platform.</p>
                <h1>Managing business payments has never been easier</h1>
                <p>Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
                <div className='land_header_contener_section_input_area'>
                    <div className='land_header_contener_section_input_area_input_fild'>
                        <label name="email">Register using email address</label>
                        <input type="email" placeholder='shakir260@gmail.com' name='email'/>
                    </div>
                    <button type='button'>sumbit</button>
                </div>
                <div className='land_header_contenter_section_bottom'>
                    <div>
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                        <p>Free Register</p>
                    </div>
                    <div>
                        <span><FontAwesomeIcon icon={faCheck}/></span>
                        <p>Great Service</p>
                    </div>
                </div>
            </div>  
            <div className='land_header_contener_section_right'>
                <img src={topImg} alt="topimg"/>
            </div> 
        </div>
    </div>
  )
}

export default Header