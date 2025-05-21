import React from 'react';
import './FooterSection.css';
import phoneIcon from '../FooterSection/Images/phone icon.jpg'; 
import backgroundImage from '../FooterSection/Images/backgroundimage.jpg'; 
import paymentOptions from '../FooterSection/Images/payment-options.jpg'; 
import appDownload from '../FooterSection/Images/app-download.png';

function FooterSection() {
    return (
        <div 
            className="footer-section" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="footer-content">
             
                <div className="footer-left">
                    <h3>ZestyBite</h3>
                    <div className="working-schedule">
                        <p>Working Schedule:</p>
                        <p>Monday - Friday: 9:00 AM - 10:00 PM</p>
                        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
                    <h3>Call us to make</h3>
                    <h3>an order!</h3>
                    <p>Don’t be shy, we don’t bite :)</p>
                    <p className="phone-number">+1 (234) 567-890</p>
                </div>

                <div className="footer-right">
                    <h3>Payment Options</h3>
                    <img src={paymentOptions} alt="Payment Options" className="payment-options" />
                    <h3>Download Our App</h3>
                    <img src={appDownload} alt="Download App" className="app-download" />
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
