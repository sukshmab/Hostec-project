import Styles from "./styles.module.scss";
import classnames from "classnames";
import InnerBanner from "./../../components/innerbanner";
import OurProcess from "../../components/ourprocess";
import BeCreative from "./../../components/becreative";
import Testimonials from "../../components/testimonials";
import visionIcon from "../../assets/images/vision_icon.svg";
import ValueIcon from "../../assets/images/value_icon.svg";
import clientLogos01 from "../../assets/images/client_logos/logo01.png";


function About() {

  
  return (
    <>
      <div className="about_bg">
        <InnerBanner/>
      </div>
      <div className="section">
        <div className="container-mini">
          <div className="flex-wrapper">
            <div className="w-40-p">
              <h2 className="head-style-02">We focus on:</h2>
              <h1 className="head-style-01">
                ONE STOP SHOP FOR HOSPITALITY MANAGEMENT
              </h1>
            </div>
            <div className={classnames("w-60-p", Styles.bdrLeft)}>
              <p>
                Hostec is an inspiration founded by a team of Hospitality professionals in the year 2011,
                who have an experiance of more than 2 decades in various areas of Hospitality Industry.
                We provide a wide spectrun of solution to Owners, Developers as well as Operators.
                Our mission is to provide high quality Hospitality services and success of our client's
                objectives.
              </p>
              <p>
                Established in united Arab Emirates, we are in the process of expanding our
                operations to other parts of GCC and Asia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OurProcess/>
      <div className="section">
        <div className="container-mini">
          <div className={Styles.vision_value}>
              <div className={Styles.vision_value_item}>
                <img src={visionIcon}/>
                <h3>vision</h3>
              </div>
              <div className={Styles.vision_value_item}>
                We specialize in: Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              </div>
              <div className={Styles.vision_value_item}>
              <img src={ValueIcon}/>
                <h3>value</h3>
              </div>
          </div>
        </div>
      </div>
      <div className={classnames("section", Styles.ourClientsBg)}>
        <div className="container-mini">
          <h2 className="head-style-02 light large">
            OUR <span>CLIENTS</span>
          </h2>
          <div className="flex-wrapper">
            <div className="w-50-p">
              <div className={Styles.clientLogos}>
                <figure>
                  <img src={clientLogos01} />
                </figure>
                <figure>
                  <img src={clientLogos01} />
                </figure>
                <figure>
                  <img src={clientLogos01} />
                </figure>
                <figure>
                  <img src={clientLogos01} />
                </figure>
                <figure>
                  <img src={clientLogos01} />
                </figure>
                <figure>
                  <img src={clientLogos01} />
                </figure>
              </div>
            </div>
            <div className="w-50-p pt-50">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
                maiores esse temporibus accusantium quas soluta quis sed rerum.
              </p>
              <p className="primary_text">John Doe, Google Inc.</p>
            </div>
          </div>
        </div>
      </div>
      <div  className="section">
        <div className="container">
            <h2 className="head-style-02 large center">
              PEOPLES <span>TESTIMONIALS</span>
            </h2>
            <Testimonials/>
        </div>
      </div>
      <BeCreative/>

    </>
  );
}

export default About;
