import { faFacebookMessenger, faInstagram, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './footer.scss';

function Footer() {
  return (
    <div className='land_footer_section'>
        <div className='land_footer_section_content'>
            <div className='land_footer_section_content_links'>
                <h5>SBappy</h5>
                <p>Simple innate summer fat appear basket his desire joy.</p>
                <div className='land_footer_section_content_links_icons'>
                    <a href='#links'><FontAwesomeIcon icon={faFacebookMessenger}/></a>
                    <a href='#links'><FontAwesomeIcon icon={faLinkedin}/></a>
                    <a href='#links'><FontAwesomeIcon icon={faTwitch}/></a>
                    <a href='#links'><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </div>
            <div className='land_footer_section_content_links'>
                <h5>Company</h5>
                <a href='#links'>About Us</a>
                <a href='#links'>Careers</a>
                <a href='#links'>Blog</a>
                <a href='#links'>Pricing</a>
            </div>
            <div className='land_footer_section_content_links'>
                <h5>Resources</h5>
                <a href='#links'>Templates</a>
                <a href='#links'>Tutorials</a>
                <a href='#links'>Free resources</a>
                <a href='#links'>Contract templates</a>
            </div>
            <div className='land_footer_section_content_links'>
                <h5>Join Our Newsletter</h5>
                <div className='land_footer_section_content_links_input_fild'>
                    <input type='email' placeholder="Email address"/>
                    <button>subcribe</button>
                </div>
                <p>*  Will send you weekly updates for your better finance management.</p>
            </div>
        </div>
        <div className='land_footer_section_copyright'>
            <p>Copyright &copy;Md. Sajjadul Islam Bappy. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer