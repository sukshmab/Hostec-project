import Styles from "./styles.module.scss";
import classnames from "classnames";
import InnerBanner from "./../../components/innerbanner";
import Testimonials from "../../components/testimonials";


function TestimonialPage() {

  
  return (
    <>
      <div className="testimonial_bg">
        <InnerBanner/>
      </div>
      <section className="section">
        <div className="container">
            <div className={Styles.serviceText}>
              <p>Your words and recognition always ignited a great inspiration to evolve our
                performance and stay relevant and unique</p>
            </div>
        </div>
      </section>
      <div className={classnames("section", Styles.testimonialBg)}>
        <div className="container">
            <h2 className="head-style-02 large light center">
              PEOPLES <span>TESTIMONIALS</span>
            </h2>
            <Testimonials/>
        </div>
      </div>
      <section className="section gray">
        <div className="container">
            <div className={Styles.contact}>
                <div className={Styles.formDual}>
                    <div className="form-filed">
                        <input className="form-control" type="text" placeholder="Enter your email...."/>
                    </div>
                    <div className="form-filed">
                        <input className="form-control" type="text" placeholder="Enter your name...."/>
                    </div>
                </div>
                <div className="form-filed">
                    <textarea className="form-control" placeholder="Comment...."/>
                </div>
                <div className={Styles.formSubmitWrap}>
                  <button type="button" className="btn btn-submit">enter your review</button>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialPage;
