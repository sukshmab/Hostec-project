import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";
import classnames from "classnames";
import footerLogo from "../../assets/images/logo_footer.svg";
import fb_icon from "../../assets/images/fb_icon.png";
import in_icon from "../../assets/images/in_icon.png";
import insta_icon from "../../assets/images/insta_icon.png";
import twt_icon from "../../assets/images/twt_icon.png";

function Footer() {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <footer className={Styles.footer}>
        <div className="container-mini">
          <div className={Styles.footerLinks}>
            <div className="flex-wrapper">
                <div className="w-25-p">
                  <figure className={Styles.footerLogo}><img src={footerLogo}/></figure>
                  <div className={Styles.socialLinks}>
                    <Link to="/"><img src={fb_icon}/></Link>
                    <Link to="/"><img src={in_icon}/></Link>
                    <Link to="/"><img src={insta_icon}/></Link>
                    <Link to="/"><img src={twt_icon}/></Link>
                  </div>
                </div>
                <div className="w-25-p">
                    <div className={Styles.links}>
                      <h3>NAVIGATE</h3>
                      <Link to="/">HOME</Link>
                      <Link to="/">WHAT WE DO</Link>
                      <Link to="/">PROTFOLIO</Link>
                      <Link to="/">TESTIMONIALS</Link>
                      <Link to="/">SIGN UP</Link>
                    </div>
                </div>
                <div className="w-25-p">
                    <div className={Styles.links}>
                      <h3>WHAT WE DO</h3>
                      <Link to="/">SERVICES</Link>              
                      <Link to="/">TRADING</Link>
                      <Link to="/">ADVISORY</Link>
                    </div>
                </div>
                <div className="w-25-p">
                  <div className={Styles.links}>
                      <h3>Contact</h3>
                      <p>
                        555 California str, Suite 100
                        <br/>
                        San Francisco, CA 94107
                        <br/>
                        1-800-312-2121, 1-800-310-1010
                        <a href="mailto:info@hostec.com">info@hostec.com</a>
                      </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={Styles.copyright}>
            <p>Copyright © 2022 hostec. All Rights Reserved.</p>
            <p>Developed By <Link to="/">Metasoft It Solutions</Link></p>
            <p><Link to="/">Terms of use</Link> |	<Link to="/">Privacy Environmental Policy</Link></p>
          </div>
        </div>
        <button className={Styles.scrollTop} onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>Scroll Top</button>
      </footer>
    </>
  );
}

export default Footer;
