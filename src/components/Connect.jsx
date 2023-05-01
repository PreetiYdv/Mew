import React from 'react'
import doctor from "../assets/images/png/doctor.png"
import phone from "../assets/images/svg/phone.svg"

function Connect() {
  return (
    <>
      <div className="container myContainer py-5">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6">
            <h2 className="fc_main ff_Slackey fs_xxl mb-4 mt-lg-4">
              Lets book a call and stay connected
            </h2>
            <div className="d-flex  flex-column flex-sm-row  align-items-center gap-4 mb-4 pb-3">
              <div className="d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  id="check1"
                  className="larger curser_pointer"
                  checked
                />
                <label
                  htmlFor="check1"
                  className="ff_PoppinsMedium curser_pointer fs_xmd fc_voilet mb-0"
                >
                  Vaccination Service{" "}
                </label>
              </div>
              <div className="d-flex align-items-center gap-3">
                <input
                  id="check2"
                  type="checkbox"
                  className="larger curser_pointer"
                  checked
                />
                <label
                  htmlFor="check2"
                  className="ff_PoppinsMedium curser_pointer fs_xmd fc_voilet mb-0"
                >
                  Veterinary Service{" "}
                </label>
              </div>
            </div>
            <p className="ff_PoppinsRegular fs_md fc_light mb-4 pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="d-flex gap-4 align-items-center">
              <button className="book_btn view_btn w-179 fc_white fs_md ff_PoppinsSemiBold">
                Book a Schedule
              </button>
              <div className="d-flex align-items-center">
                <img src={phone} alt="phone" />
                <a
                  href="tel:123456789"
                  className="ff_PoppinsMedium fs_xmd fc_voilet"
                >
                  EmergencyCall
                </a>
              </div>
            </div>
          </div>
          <div className="col-9 col-lg-5 pt-lg-0 pt-5">
            <img src={doctor} alt="doctor" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Connect