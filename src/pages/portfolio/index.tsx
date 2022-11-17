import Styles from "./styles.module.scss";
import classnames from "classnames";
import InnerBanner from "./../../components/innerbanner";
import BeCreative from "./../../components/becreative";
import Servicesimg from "./../../assets/images/banners/service_04.webp";
import Servicesimg02 from "./../../assets/images/banners/service_05.webp";
import Servicesimg03 from "./../../assets/images/banners/service_06.webp";


function Portfolio() {

  
  return (
    <>
      <div className="portfolio_bg">
        <InnerBanner/>
      </div>
      <section className="section">
        <div className="container">
            <div className={Styles.serviceText}>
              <p>We placed our presence in the market by catering to
                the needs of our valueble clients</p>
            </div>
            <div className={Styles.services}>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg02}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg03}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg02}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
              <div className={Styles.serviceItem}>
                  <img src={Servicesimg03}/>
                  <h2>ABC HOTELS</h2>
                  <div className={Styles.location}>
                    dubai - uae
                  </div>
              </div>
            </div>
        </div>
      </section>
      <BeCreative/>

    </>
  );
}

export default Portfolio;
