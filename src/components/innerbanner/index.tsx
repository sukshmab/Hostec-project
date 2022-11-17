import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import whatwedobanner from "../../assets/images/banners/what_we_do_banner.webp";

function InnerBanner() { 

  const location = useLocation();

  const getCurrentTitle = () => {

    switch (location.pathname) {

      case "/about":
        return "About Us";
        
      case "/whatwedo":
        return "What We Do";

      case "/portfolio":
        return "Portfolio";

      case "/testimonials":
        return "Testimonials";

    }

  };

  return (
    <section className="innerBanner">  
        <div className="container">
          <div className="bannertext">
            <h1>{getCurrentTitle()}</h1>
            <p><Link to="/home">home</Link> - {getCurrentTitle()}</p>
          </div>
        </div>
    </section>
  );
}

export default InnerBanner;
