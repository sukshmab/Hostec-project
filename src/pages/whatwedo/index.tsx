import Styles from "./styles.module.scss";
import classnames from "classnames";
import InnerBanner from "./../../components/innerbanner";
import Servicesimg from "./../../assets/images/banners/service_04.webp";
import Servicesimg02 from "./../../assets/images/banners/service_05.webp";
import Servicesimg03 from "./../../assets/images/banners/service_06.webp";
import playIcon from "../../assets/images/play_icon.svg";
import BeCreative from "./../../components/becreative";


function WhatWeDo() {
  return (
    <>
      <div className="whatwedo_bg">
        <InnerBanner/>
      </div>

      <section className="section">
        <div className="container">
            <div className={Styles.serviceText}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className={Styles.services}>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg}/>
                  <h2>Services</h2>
                  <div className={Styles.action}>
                    <button type="button" className="btn btn-territory">explore now</button>
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg02}/>
                  <h2>Trading</h2>
                  <div className={Styles.action}>
                    <button type="button" className="btn btn-territory">explore now</button>
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg03}/>
                  <h2>Advosory</h2>
                  <div className={Styles.action}>
                    <button type="button" className="btn btn-territory">explore now</button>
                  </div>
              </div>
            </div>
        </div>
      </section>

      <div className={Styles.succeessSection}>
        <div className="container">
          <div className={Styles.successSection}>
            <div className={Styles.years}>12</div>
            <p><span>YEARS OF SUCCESSFUL WORK</span>IN THE MARKET</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
            <div className={Styles.serviceText}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>
      </section>

      <BeCreative/>

    </>
  );
}

export default WhatWeDo;
