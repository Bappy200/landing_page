import React from 'react'
import './testimonial.scss';
import logo from '../../assets/brand_logo_2.png';
import image1 from '../../assets/testimonial.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faStar } from '@fortawesome/free-solid-svg-icons';


function Testimonial() {
  return (
    <div className='land_testimonial_section'>
        <div className='land_testimonial_section_heading'>
            <p>testimonial</p>
            <h2>Check what our clients are saying</h2>
        </div>
        <div className='land_testimonial_section_slide'>
            <div className='land_testimonial_section_slide_image'>
                <img src={image1} alt="image1"/>
            </div>
            <div className='land_testimonial_section_slide_info'>
                <FontAwesomeIcon className='testimonial_quote_icon' icon={faQuoteLeft}/>
                <div className='land_testimonial_section_slide_info_start'>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <p className='land_testimonial_section_slide_info_text'>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.</p>
                <div className='land_testimonial_section_slide_info_buttom'>
                    <div>
                        <h4>mst happy</h4>
                        <p>CEO GetNextDesign</p>
                    </div>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial