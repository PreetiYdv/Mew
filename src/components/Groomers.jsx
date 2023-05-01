import React from "react";
import Slider from "react-slick";
import groomer_img1 from "../assets/images/png/groomer_img1.png";
import groomer_img2 from "../assets/images/png/groomer_img2.png";
import groomer_img3 from "../assets/images/png/groomer_img3.png";
import groomer_img4 from "../assets/images/png/groomer_img4.png";
import zig_zag from "../assets/images/svg/zig_zag_line.svg"
import circle from "../assets/images/svg/circle.svg"

function Groomers() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "60px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container myContainer py-5 position-relative">
        <img src={zig_zag} alt="zig_zag" className="zig-zag_position" />
        <img src={circle} alt="circle" className="circle_position" />
        <h1 className="fc_main ff_Slackey fs_xxl text-center  py-5 position-relative z-4">
          Our Groomers
        </h1>

        <Slider {...settings} className="groomer">
          <div className="px-2 py-5 d-flex justify-content-center">
            <div className="groomer_card pt-5">
              <img
                src={groomer_img1}
                alt=""
                className="groomer_img rounded-pill mx-auto"
              />
              <div className="d-flex flex-column translate_text">
                <h2 className=" ff_PoppinsSemiBold fc_main fs_lg text-center mb-3">
                  Adam Smith
                </h2>
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-4">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5  d-flex justify-content-center">
            <div className="groomer_card pt-5">
              <img
                src={groomer_img2}
                alt=""
                className="groomer_img rounded-pill mx-auto"
              />
              <div className="d-flex flex-column  translate_text">
                <h2 className=" ff_PoppinsSemiBold fc_main fs_lg text-center mb-3">
                  Adam Smith
                </h2>
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-4">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5  d-flex justify-content-center">
            <div className="groomer_card pt-5">
              <img
                src={groomer_img3}
                alt=""
                className="groomer_img rounded-pill mx-auto"
              />
              <div className="d-flex flex-column  translate_text">
                <h2 className=" ff_PoppinsSemiBold fc_main fs_lg text-center mb-3">
                  Adam Smith
                </h2>
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-4">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5  d-flex justify-content-center">
            <div className="groomer_card pt-5">
              <img
                src={groomer_img4}
                alt=""
                className="groomer_img rounded-pill mx-auto"
              />
              <div className="d-flex flex-column  translate_text">
                <h2 className=" ff_PoppinsSemiBold fc_main fs_lg text-center mb-3">
                  Adam Smith
                </h2>
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-4">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="d-flex justify-content-center pb-5">
          <button className="view_btn book_btn w-179  fc_white ff_PoppinsSemiBold fs_md">
            View Team
          </button>
        </div>
      </div>
    </>
  );
}

export default Groomers;
