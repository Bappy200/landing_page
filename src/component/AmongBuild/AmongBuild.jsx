import React from 'react'
import './amongBuild.scss'

import image1 from '../../assets/start.png';
import image2 from '../../assets/nayLikely.png';
import image3 from '../../assets/expwnse.png';

function AmongBuild() {
  return (
    <div className='land_among_build_section'>
        <h4>Among leave law built now.</h4>
        <div className='land_among_build_section_item'>
            <div>
                <img src={image1} alt="images"/>
            </div>
            <p>Village did remov enjoyed</p>
        </div>
        <div className='land_among_build_section_item'>
            <div>
                <img src={image2} alt="images"/>
            </div>
            <p>Nay likely  length sooner</p>
        </div>
        <div className='land_among_build_section_item'>
            <div>
                <img src={image3} alt="images"/>
            </div>
            <p>Expense windows adapted </p>
        </div>
    </div>
  )
}

export default AmongBuild