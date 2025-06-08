import React from "react";
import "./Footer.css";
// import Tiktok from '@iconscout/react-unicons/icons/uil-tiktok';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';

import Wave from '../../assets/wave.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>AlamoraCanggu@gmail.com</span>
                <div className="f-icon">
                {/* <Tiktok color='white' size='3rem'/> */}
                <Facebook color='white' size='3rem'/>


                </div>
            </div>

        </div>
    )
}

export default Footer;