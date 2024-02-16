import React from 'react';

const ContactForm = () => {
    return (
        <div id="contact-container">
            <div id="contact-form-container" className="column contact-container">
                <div id="contact-name-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-name-input-field">Name :</label>
                        <span className="error-label hide">Please enter your name.</span>
                    </div>
                    <input id="contact-name-input-field" tabIndex="-1" />
                </div>
                <div id="contact-email-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-email-input-field">Email :</label>
                        <span className="error-label hide">Please enter a valid email address.</span>
                    </div>
                    <input id="contact-email-input-field" type="email" tabIndex="-1" />
                </div>
                <div id="contact-phone-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-phone-input-field">Phone number :</label>
                        <span className="error-label hide">Please enter a valid phone number.</span>
                    </div>
                    <input id="contact-phone-input-field" type="number" tabIndex="-1" />
                </div>
                <br />
                <div id="contact-message-input" className="input-container column">
                    <div className="row">
                        <label htmlFor="contact-message-input-field">Message :</label>
                        <span className="error-label hide">Please enter your message.</span>
                    </div>
                    <textarea id="contact-message-input-field" tabIndex="-1"></textarea>
                </div>
                <div className="column" id="contact-button-container">
                    <div>
                        <a tabIndex="-1" target="_blank" href="https://twitter.com/DavidHckh"><img className="social-icon" src="icons/twitter-icon.png" alt="twitter contact social icon small 28x28" height="28" width="28" /></a>
                        <a tabIndex="-1" target="_blank" href="https://github.com/davidhckh"><img className="social-icon" alt="github contact social icon small 28x28" height="28" width="28" src="icons/github-icon.png" /></a>
                        <a tabIndex="-1" target="_blank" href="https://www.linkedin.com/in/david-heckhoff-1ba8a622a/">
                            <img className="social-icon " alt="linkedin contact social icon small 28x28" height="28" width="28" src="icons/linkedin-icon.png" /></a>
                        <a tabIndex="-1" href="mailto:#"> <img className="social-icon" alt="email contact social icon small 28x28" height="28" width="28" src="icons/mail-icon.png" /></a>

                    </div>
                    <div>
                        <div id="contact-submit-button" className="small-button orange-hover">
                            Submit
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default ContactForm;
