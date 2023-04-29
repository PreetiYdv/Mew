import React from "react";
import dog from "../assets/images/png/dog_img.png";

function Facilities() {
  return (
    <>
      <div className="container myContainer py-5">
        <div className="d-flex justify-content-between align-items-center py-5">
          <h2 className=" ff_Slackey fc_main fs_xxl">Facilities we provides</h2>
          <p className=" ff_PoppinsRegular fc_light fs_md mw_577">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 p-0 pt-5">
            <div className="border_bottom pb-5">
              <h3 className=" ff_Slackey fc_main fs_xlg">Feed Training</h3>
              <p className=" ff_PoppinsRegular fc_light fs_md mw_244">
                Ut enim ad minim velit esse cillum dolore eu fugiat..
              </p>
            </div>
            <div className="border_bottom py-5">
              <h3 className=" ff_Slackey fc_main fs_xlg">Health test</h3>
              <p className=" ff_PoppinsRegular fc_light fs_md mw_244">
                tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
            <div className="py-5">
              <h3 className=" ff_Slackey fc_main fs_xlg">Vaccination</h3>
              <p className=" ff_PoppinsRegular fc_light fs_md mw_244">
                tempor incididunt ut labore et dolore magna aliqua...
              </p>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className=" rounded-pill ">
              <img src={dog} alt="" className=" rounded-pill img_border" />
            </div>
          </div>
          <div className="col-lg-4 p-0 pt-5">
            <div className="border_bottom pb-5">
              <div className=" mw_244 ms-auto">
                <h3 className=" ff_Slackey fc_main fs_xlg">Overnight Care</h3>
                <p className=" ff_PoppinsRegular fc_light fs_md">
                  Ut enim ad minim velit esse cillum dolore eu fugiat..
                </p>
              </div>
            </div>
            <div className="border_bottom py-5">
              <div className=" mw_244 ms-auto">
                <h3 className=" ff_Slackey fc_main fs_xlg">Medical Care</h3>
                <p className=" ff_PoppinsRegular fc_light fs_md">
                  tempor incididunt ut labore et dolore magna aliqua...
                </p>
              </div>
            </div>
            <div className="py-5">
              <div className=" mw_244 ms-auto">
                <h3 className=" ff_Slackey fc_main fs_xlg">
                  Traning Facility
                </h3>
                <p className=" ff_PoppinsRegular fc_light fs_md">
                  tempor incididunt ut labore et dolore magna aliqua...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Facilities;
