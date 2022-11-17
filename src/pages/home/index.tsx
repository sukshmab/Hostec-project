import Styles from "./styles.module.scss";
import Banner from "../../components/banner";
import Testimonials from "../../components/testimonials";
import classnames from "classnames";
import serviceImage01 from "../../assets/images/banners/service_01.webp";
import serviceImage02 from "../../assets/images/banners/service_02.webp";
import serviceImage03 from "../../assets/images/banners/service_03.webp";
import clientLogos01 from "../../assets/images/client_logos/logo01.png";
import OurProcess from "../../components/ourprocess";
import BeCreative from "./../../components/becreative";


function Home() {
  return (
    <section>
      <Banner />

      <div className="section">
        <div className="container-mini">
          <div className="flex-wrapper">
            <div className="w-40-p">
              <h2 className="head-style-02">We focus on</h2>
              <h1 className="head-style-01">
                ONE STOP FOR HOSPITALITY MANAGMENT
              </h1>
            </div>
            <div className="w-60-p">
              <p>
             Hostec isn an inspiration founded bya team of Hospitality professionals in the year 2011,
             who have an experience of more than 2 decades in various areas of Hospitality Industry.
             We provide a wide spectrum of solution to Owner, Developers as well as Operators.
             Our mission is to provide high quality Hospitality Services and ensure success of our client's
             objectives.
              </p>
              <p>
                Established in United Arab Emirates, we are in the process of expanding our operations to other parts of GCC and Asia.
              </p>
              <a className="link-btn">Explore for more &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>

      <div className="section dark">
        <div className="container">
          <div className="flex-wrapper g-0">
            <div className="w-50-p">
              <div className={Styles.serviceImage}>
                <img src={serviceImage01} />
              </div>
            </div>
            <div className="w-50-p">
              <div className={Styles.serviceDescription}>
                <h2 className="head-style-02 light">
                  HOTEL <span>MANAGEMENT SERVICES</span>
                </h2>
                <p>
                  <span>Hostec has a dedicated team with extensive
                    knowledge and a wealth of experience in managing Hotel operations.
                  </span>
                </p>
                <a className="link-btn">Explore for more &gt;&gt;</a>
              </div>
            </div>
          </div>
          <div className="flex-wrapper g-0">
            <div className="w-50-p">
              <div className={Styles.serviceDescription}>
                <h2 className="head-style-02 light">
                ASSET <span>MANAGEMENT SERVICES</span>
                </h2>
                <p>
                  With millions and billions at stake, the most important
                  aspect for every Owner becomes Asset Protection.
                  We provide all necessary tools to ensure talking care of
                  the assets as well as enhancing their value.
                </p>
                <a className="link-btn">Explore for more &gt;&gt;</a>
              </div>
            </div>
            <div className="w-50-p">
              <div className={Styles.serviceImage}>
                <img src={serviceImage02} />
              </div>
            </div>
          </div>
          <div className="flex-wrapper g-0">
            <div className="w-50-p">
              <div className={Styles.serviceImage}>
                <img src={serviceImage03} />
              </div>
            </div>
            <div className="w-50-p">
              <div className={Styles.serviceDescription}>
                <h2 className="head-style-02 light">
                MYSTERY <span>DELEGATES SERVICES</span>
                </h2>
                <p>
                  A subsidiary of HOSTEC called MDS carries out extensive
                  internal audit functions to ensure that the Business ethics
                  is safegurded and all the Policies and Procedures of the Hotel are strictly implemented.
                </p>
                <a className="link-btn">Explore for more &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container-mini">
          <h2 className="head-style-02 large">
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

      <OurProcess/>

      <BeCreative/>

      <div  className="section">
        <div className="container">
            <h2 className="head-style-02 large center">
              PEOPLES <span>TESTIMONIALS</span>
            </h2>
            <Testimonials/>
        </div>
      </div>

    </section>
  );
}

export default Home;
