import React from 'react';
import { Link } from "react-router-dom";
import Styles from "./styles.module.scss";
import classnames from "classnames";
import Slider from "react-slick";   



function Testimonials() {

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <>
      <section className="testimonials-slider">
        <Slider {...settings}>
          <div className={Styles.sliderItem}>
            <div className={Styles.testimonialItem}>
                <div className={Styles.testData}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className={Styles.client}>
                  <figure><img src="https://i.pravatar.cc/300"></img></figure>
                  <figcaption>
                    <span>Sean Poual</span>
                    client of company
                  </figcaption>
                </div>
            </div>
          </div>
          <div className={Styles.sliderItem}>
            <div className={Styles.testimonialItem}>
                <div className={Styles.testData}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className={Styles.client}>
                  <figure><img src="https://i.pravatar.cc/280"></img></figure>
                  <figcaption>
                    <span>Sean Poual</span>
                    client of company
                  </figcaption>
                </div>
            </div>
          </div>
          <div className={Styles.sliderItem}>
            <div className={Styles.testimonialItem}>
                <div className={Styles.testData}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className={Styles.client}>
                  <figure><img src="https://i.pravatar.cc/310"></img></figure>
                  <figcaption>
                    <span>Sean Poual</span>
                    client of company
                  </figcaption>
                </div>
            </div>
          </div>
          <div className={Styles.sliderItem}>
            <div className={Styles.testimonialItem}>
                <div className={Styles.testData}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className={Styles.client}>
                  <figure><img src="https://i.pravatar.cc/330"></img></figure>
                  <figcaption>
                    <span>Sean Poual</span>
                    client of company
                  </figcaption>
                </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}

export default Testimonials;
