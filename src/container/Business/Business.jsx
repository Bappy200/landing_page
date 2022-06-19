import React from 'react'
import './business.scss'

import image1 from '../../assets/offending.png';
import image2 from '../../assets/promotion.png';
import image3 from '../../assets/blessing.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Business() {
  return (
    <div className='land_business_section'>
        <div className='land_business_section_image'>
            <div>
                <h3>hello team 1000</h3>
                <p>Why kept very ever home mrs. Considered</p>
            </div>
        </div>
        <div className='land_business_section_title_text'>
            <h2>We help your business grow faster.</h2>
            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.</p>
        </div>
      
        <div className='land_business_section_services'>
            <div className='land_business_section_services_item'>
                <img src={image1} alt="images"/>
                <h4>Offending belonging</h4>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <a href='#more'><span>Read More</span> <FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
            <div className='land_business_section_services_item'>
                <img src={image2} alt="images"/>
                <h4>Offending belonging</h4>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <a href='#more'><span>Read More</span> <FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
            <div className='land_business_section_services_item'>
                <img src={image3} alt="images"/>
                <h4>Offending belonging</h4>
                <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</p>
                <a href='#more'><span>Read More</span> <FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
        </div>
        <div className='land_business_section_button'>
            <button>more about</button>
        </div>
    </div>
  )
}

export default Business