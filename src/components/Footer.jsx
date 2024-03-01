import React from 'react'
import { LOGO_URL } from '../utils/constants'
const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer-address'>
                <img src= {LOGO_URL} style={{width : "100px", height: "100px"}} />
                <h2>Contact</h2>
                <address>
                    1234 somewhere in the world 234214565<br />
                    <a className='footer-btn' href='mailto:abc@gmail.com'>Email</a>
                </address>
            </div>
            <div className='legal'>
                <p>&copy; 2024 Cheif food. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer