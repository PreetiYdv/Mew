import React from "react";
import Slider from "react-slick";
import groomer_img1 from "../assets/images/png/groomer_img1.png";
import groomer_img2 from "../assets/images/png/groomer_img2.png";
import groomer_img3 from "../assets/images/png/groomer_img3.png";
import groomer_img4 from "../assets/images/png/groomer_img4.png";

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
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
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
      <div className="container myContainer py-5">
        <h1 className="fc_main ff_Slackey fs_xxl text-center py-4">
          Our Groomers
        </h1>

        <Slider {...settings}>
          <div className="px-2 py-5">
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
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-5">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5">
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
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-5">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5">
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
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-5">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 pt-5">
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
                <p className=" ff_PoppinsRegular fs_md fc_light text-center pb-5">
                  Veterinarian
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="d-flex justify-content-center">
          <button className="view_btn fc_white ff_PoppinsSemiBold fs_md">View Team</button>
        </div>
      </div>
    </>
  );
}

export default Groomers;
