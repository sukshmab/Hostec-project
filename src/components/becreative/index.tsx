import { Link } from "react-router-dom";
import "./styles.scss";
import classnames from "classnames";

import playIcon from "../../assets/images/play_icon.svg";


function InnerBanner() { 

  return (
    <div  className="section be_creative">
        <div className="container">
            <div className="be_creative_title">
                BE CREATIVE <img src={playIcon}/> WITH HASWELL
            </div>
        </div>
      </div>
  );
}

export default InnerBanner;
