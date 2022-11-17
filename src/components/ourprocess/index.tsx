import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";
import classnames from "classnames";
import planing_icon from "../../assets/images/planning_icon.svg";
import settings_icon from "../../assets/images/settings_icon.svg";
import plan_icon_3 from "../../assets/images/plan_icon_3.svg";
import plan_icon_4 from "../../assets/images/plan_icon_4.svg";


function OurProcess() { 

  return (
    <div className={classnames("section", Styles.process_bg)}>
        <div className="container">
          <div className="flex-wrapper">
            <div className="w-40-p">
              <h2 className="head-style-02 large light">
                OUR <span>PROCESS</span>
              </h2>
              <p>
                Your requirements are systematically processed to give you an enhanced service.
              </p>
            </div>
            <div className="w-60-p">
              <div className="flex-wrapper">
                <div className="w-50-p">
                  <div className={Styles.processitem}>
                    <figure>
                      <img src={planing_icon} />
                    </figure>
                    <div>
                      <h4>PLANING</h4>
                    </div>
                  </div>
                </div>
                <div className="w-50-p">
                  <div className={Styles.processitem}>
                    <figure>
                      <img src={settings_icon} />
                    </figure>
                    <div>
                      <h4>STRATEGY</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-wrapper">
                <div className="w-50-p">
                  <div className={Styles.processitem}>
                    <figure>
                      <img src={plan_icon_3} />
                    </figure>
                    <div>
                      <h4>ACQUISITION</h4>
                    </div>
                  </div>
                </div>
                <div className="w-50-p">
                  <div className={Styles.processitem}>
                    <figure>
                      <img src={plan_icon_4} />
                    </figure>
                    <div>
                      <h4>EXECUTION</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default OurProcess;
