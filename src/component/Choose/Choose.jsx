import React from 'react'
import './choose.scss';

function Choose() {
  return (
    <div className='land_choose_section'>
        <div className='land_choose_section_left'>
            <p>Why Choose Us</p>
            <h2>Track your crytpo portfolio on the best way possible</h2>
            <p className='land_choose_section_left_text'>Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.</p>
        </div>
        <div className='land_choose_section_right'>
            <form>
                <div className='land_choose_section_right_input_fild'>
                    <input type='email' placeholder='Email Address'/>
                </div>
                <div className='land_choose_section_right_input_fild'>
                    <input type='password' placeholder='Password'/>
                </div>
                <div className='land_choose_section_right_submit'>
                    <input type='submit' value="get started"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Choose