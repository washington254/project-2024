import React from 'react'
import ContactForm from './ContactForm'; 


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
             <ContactForm />
                <div className="contact-img">
                    <div className="cta-ico">
                        <img src="/CTA.png" alt="call to action" />
                    </div>
                    <img src="/man.png" alt="trader"  />
                </div>

           </div>
           <div className="keys row center">
                    <p>
                    Goodwill Wealth Management Pvt Ltd <br />  MCX : 11095   |    ICEX : 2035   |    SEBI Regn. No : INZ000177036 <br />
                                                        
                                                        MSEI : 11240   |    NSE : 90097   |    BSE : 6648   <br />

                   <br /> Clearing Code   |  NSE : M52003   |    BSE : 6648 <br />

                   <br /> CDSL DP   |  DP ID : 12084200   |    SEBI Regn. No : IN - DP - CDSL - 309 - 2017<br />

                    <br /> Research Analyst   |  SEBI Regn. No : INH200005179<br />

                   <br /> Mutual Funds   | ARN : 182218<br /><br />

                    please write to us : promotions@gwcindia.in
                    </p>
                </div>
         
            <footer className="row center">
                

                <div id="legal-container" className="row center">
                    <span></span>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">&copy; GWWM EDUCATION</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">procedures</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">terms and conditions</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">Legal Notice</a>
                    <a tabindex="-1" className="legal-link" href="#" target="_blank">Privacy
                        Policy</a>
                </div>
            </footer>
</section>

  )
}

export default Contact