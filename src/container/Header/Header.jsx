import React from 'react'
import Navigation from '../../component/Navigation/Navigation'
import topImg from '../../assets/header_img.png'
import './header.scss'

function Header() {
  return (
    <div className='land_header_contener'>
        <Navigation/>
        <div className='land_header_contener_section'>
            <div className='land_header_contener_section_left'>
                <p>Product Growth Solution in Single Platform.</p>
                <h1>Managing business payments has never been easier</h1>
                <p>Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.</p>
            </div>  
            <div className='land_header_contener_section_right'>
                <img src={topImg} alt="topimg"/>
            </div> 
        </div>
    </div>
  )
}

export default Header