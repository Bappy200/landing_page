import React from 'react'
import './brand.scss';
import {logo1, logo2, logo3, logo4, logo5, logo6, logo7} from './import.js'
function Brand() {
  return (
    <div className='land_brand'>
        <p>Over 32k+ software  businesses growing with SBappyI</p>
        <div className='land_brand_content'>
            <div className='land_brand_content_item'>
                <img src={logo1} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo2} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo3} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo4} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo5} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo7} alt='logoImage'/>
            </div>
            <div className='land_brand_content_item'>
                <img src={logo6} alt='logoImage'/>
            </div>
        </div>
    </div>
  )
}

export default Brand