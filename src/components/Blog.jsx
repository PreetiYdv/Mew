import React, { useRef } from "react";
import Slider from "react-slick";
import kitten from "../assets/images/png/kitten.png";
import prev_arrow from "../assets/images/svg/prevArrow.svg"
import next_arrow from "../assets/images/svg/nextArrow.svg";

function Blog() {
  const myBtn = useRef();
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container myContainer py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5">
            <h2 className=" ff_Slackey fs_xxl fc_dark text-center text-lg-start pb-4">
              {" "}
              DaCode Blog
            </h2>
            <p className=" ff_PoppinsRegular fs_md fc_light lh_30 text-center text-lg-start pe-lg-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className=" d-flex justify-content-center justify-content-lg-start pt-5">
              <button className="learn_btn fc_white ff_PoppinsSemiBold fs_md">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-xl-7 pt-5 pt-xl-0">
            <div className="slider_box">
              <Slider ref={myBtn} {...settings}>
                <div className="slider_content">
                  <div className="d-flex gap-4 flex-sm-row flex-column justify-content-center align-items-center">
                    <img
                      src={kitten}
                      alt=""
                      className=" w-50 kitten_img h-auto"
                    />
                    <div>
                      <h3 className=" ff_PoppinsSemiBold fc_dark fs_xlg pb-3 pt-lg-3 lh_30 mb-0 text-center text-sm-start">
                        Why Your SaaS Business should use WordPress
                      </h3>
                      <p className="slider_para ff_PoppinsRegular fc_lightGrey fs_xmd pb-md-4">
                        A content management system like WordPress can help you
                        build a highly engaging website for your SaaS business,
                        with little to no effort
                      </p>
                      <div className="d-flex justify-content-center justify-content-sm-start gap-3 align-items-center pt-3">
                        <div
                          className="blog_slider rounded-pill"
                          onClick={() => myBtn.current.slickPrev()}
                        >
                          <img src={prev_arrow} alt="prev_arrow" />
                        </div>
                        <div
                          className="blog_slider rounded-pill"
                          onClick={() => myBtn.current.slickNext()}
                        >
                          <img src={next_arrow} alt="next_arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider_content">
                  <div className="d-flex gap-4 flex-sm-row flex-column justify-content-center align-items-center">
                    <img
                      src={kitten}
                      alt=""
                      className=" w-50 kitten_img h-auto"
                    />
                    <div>
                      <h3 className=" ff_PoppinsSemiBold fc_dark fs_xlg pb-3 pt-lg-3 lh_30 mb-0 text-center text-sm-start">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <p className="slider_para ff_PoppinsRegular fc_lightGrey fs_xmd pb-md-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium consequatur minus repellendus labore saepe ut voluptates ullam harum dolorum.
                      </p>
                      <div className="d-flex justify-content-center justify-content-sm-start gap-3 align-items-center pt-3">
                        <div
                          className="blog_slider rounded-pill"
                          onClick={() => myBtn.current.slickPrev()}
                        >
                          <img src={prev_arrow} alt="prev_arrow" />
                        </div>
                        <div
                          className="blog_slider rounded-pill"
                          onClick={() => myBtn.current.slickNext()}
                        >
                          <img src={next_arrow} alt="next_arrow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
