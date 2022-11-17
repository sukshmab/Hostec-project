import {useRef} from 'react';
import Styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banners/banner_01.webp";
import fbIcon from "../../assets/images/facebook_gray_icon.svg";
import instaIcon from "../../assets/images/instagram_gray_icon.svg";
import TwterIcon from "../../assets/images/twitter_twitter_icon.svg";
import Slider from "react-slick";

function Banner() {

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
    <section className={Styles.banner}>  
        <div className={Styles.bannerSocial}>
            <Link to="/"><img src={fbIcon} alt="Facebook"/></Link>
            <Link to="/"><img src={instaIcon} alt="Instagram"/></Link>
            <Link to="/"><img src={TwterIcon} alt="Twitter"/></Link>
        </div>
        <section className="slider-wrapper">
            <Slider {...settings}>
              <div className={Styles.sliderItem}>
                <img src={bannerImage} className={Styles.bannerImage} alt="hostec"/>
                <div className={Styles.slidertextWrap}>
                  <div className="container">
                    <div className={Styles.slidertext}>
                      <h1>
                        <span>Welcome to</span>
                        <div className="typewriter">hostec</div>
                      </h1>
                      <div className={Styles.buttonWrap}>
                        <button type="button" className="btn btn-primary">EXPLORE MORE</button>
                        <button type="button" className="btn btn-secondary">Sign up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.sliderItem}>
                <img src={bannerImage} className={Styles.bannerImage} alt="hostec"/>
                <div className={Styles.slidertextWrap}>
                  <div className="container">
                    <div className={Styles.slidertext}>
                      <h1>
                        <span>Welcome to</span>
                        <div className="typewriter">hostec</div>
                      </h1>
                      <div className={Styles.buttonWrap}>
                        <button type="button" className="btn btn-primary">EXPLORE MORE</button>
                        <button type="button" className="btn btn-secondary">Sign up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
        </section>
        <div className={Styles.downArrow} onClick={handleClick}>Scroll Down</div>
    </section>
    <div ref={ref} className={Styles.scrollIntoView}>Hostec UAE</div>
    </>
  );
}

export default Banner;
