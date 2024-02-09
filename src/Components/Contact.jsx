import React from 'react'

const Contact = () => {
  return (
    <section id="contact-section" className="content-width column">
        <div className="column" id="contact-header-container">
            <div >
                <h2 className='say-hello'>Say hello 👋</h2>
            </div>
            <h1 className="section-header-container">
                Contact Us
            </h1>
        </div>

           <div className="row center contact-down">
             <div id="contact-container">
                <div id="contact-form-container" className="column contact-container">
                    <div id="contact-name-input" className="input-container column">
                        <div className="row">
                            <label for="contact-name-input-field">Name :</label>
                            <span className="error-label hide">Please enter your name.</span>
                        </div>
                        <input id="contact-name-input-field" tabindex="-1"/>
                    </div>
                    <div id="contact-email-input" className="input-container column">
                        <div className="row">
                            <label for="contact-email-input-field">Email :</label>
                            <span className="error-label hide">Please enter a valid email address.</span>
                        </div>
                        <input id="contact-email-input-field" type="email" tabindex="-1"/>
                    </div>
                    <div id="contact-email-input" className="input-container column">
                        <div className="row">
                            <label for="contact-email-input-field">Phone number :</label>
                            <span className="error-label hide">Please enter a valid phone number.</span>
                        </div>
                        <input id="contact-email-input-field" type="number" tabindex="-1"/>
                    </div>
                    <div id="contact-message-input" className="input-container column">
                        <div className="row">
                            <label for="contact-message-input-field">Message :</label>
                            <span className="error-label hide">Please enter your message.</span>
                        </div>
                        <textarea id="contact-message-input-field" tabindex="-1"></textarea>
                    </div>
                    <div className="column" id="contact-button-container">
                        <div>
                            <a tabindex="-1" target="_blank" href="https://twitter.com/DavidHckh"><img className="social-icon" src="icons/twitter-icon.png" alt="twitter contact social icon small 28x28" height="28" width="28"/></a>
                            <a tabindex="-1" target="_blank" href="https://github.com/davidhckh"><img className="social-icon" alt="github contact social icon small 28x28" height="28" width="28" src="icons/github-icon.png"/></a>
                            <a tabindex="-1" target="_blank" href="https://www.linkedin.com/in/david-heckhoff-1ba8a622a/">
                                <img className="social-icon " alt="linkedin contact social icon small 28x28" height="28" width="28" src="icons/linkedin-icon.png"/></a>
                            <a tabindex="-1" href="mailto:#"> <img className="social-icon" alt="email contact social icon small 28x28" height="28" width="28" src="icons/mail-icon.png"/></a>
                            
                        </div>
                        <div>
                        <div id="contact-submit-button" className="small-button orange-hover">
                            Submit
                        </div>
                        </div>
                    </div>
                </div>

            </div>
                <div className="contact-img">
                    <img src="/man.png" alt="trader"  />
                </div>

           </div>
           <div className="keys row center">
                    <p>
                    Goodwill Wealth Management Pvt Ltd  <br /><br />
                    MCX : 11095   |    ICEX : 2035   |    SEBI Regn. No : INZ000177036 <br />
                        
                    
                    MSEI : 11240   |    NSE : 90097   |    BSE : 6648   <br />

                    Clearing Code   | <br />

                    NSE : M52003   |    BSE : 6648 <br />

                    CDSL DP   | <br />

                    DP ID : 12084200   |    SEBI Regn. No : IN - DP - CDSL - 309 - 2017<br />

                    Research Analyst   |<br />
                    SEBI Regn. No : INH200005179<br />

                    Mutual Funds   |<br />
                    ARN : 182218<br /><br />

                    please write to us : promotions@gwcindia.in
                    </p>
                </div>
         
            <footer className="row center">
                

                <div id="legal-container" className="row center">
                    <span></span>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">&copy; GWWM EDUCATION</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">Legal Notice</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">Privacy
                        Policy</a>
                </div>
            </footer>
</section>

  )
}

export default Contact