import React from 'react'
import InjeImg from "../assets/images/png/injection.png"
import LittleCat from "../assets/images/png/little_cat.png"
import Dr from "../assets/images/png/dr.png"
import Hand from "../assets/images/png/hand.png"
import DogFoot from "../assets/images/png/dog_foot.png"
import Traingle from "../assets/images/png/traingle.png"


const Service = () => {
  return (
    <>
        <div className="container myContainer pt-md-5 pt-5">
            <h2 className='d-flex ff_Slackey pb-lg-4 pb-2 pb-md-0 m-0 justify-content-center align-item-center'>
              <span className='dog_foot'>
                  <img src={DogFoot} alt="" />
              </span>
              <p className='  fs_xxl fc_main'>Our Services</p>
            </h2>
            <p className='text-center ms-auto me-auto ff_PoppinsRegular fs_md fc_light max-w-482'>
            Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.
            </p>
        </div>
        <div className="container myContainer pt-lg-5 pb-md-4">
          <div className="row">
            <div className="col-lg-3 col-sm-6 pt-4 d-flex justify-content-center">
              <div className='max-w-250 bg_white p-4 service_card bg-white rounded-5'>
                 <div className='service_box '>
                  <img src={InjeImg} className='w-100' alt="injection image" />
                 </div>
                 <h3 className='ff_Slackey fs_lg  text-center'>
                  <span className='  fc_light'>
                  Vaccination
                  </span>
                 </h3>
                 <p className='ff_PoppinsRegular fc_light pt-lg-3 text-center'>
                 Perfect one you will like it. It’s our promise.
                 </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pt-4 d-flex justify-content-center">
              <div className='max-w-250 bg_white p-4 service_card bg-white rounded-5'>
                 <div className='service_box bg_green p-lg-1'>
                  <img src={LittleCat} className='w-100' alt="LittleCat image" />
                 </div>
                 <h3 className='ff_Slackey fs_lg  text-center'>
                  <span className='  fc_light'>
                  Pet Grooming
                  </span>
                 </h3>
                 <p className='ff_PoppinsRegular fc_light pt-lg-3 text-center'>
                 Perfect one you will like it. It’s our promise.
                 </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pt-4 d-flex justify-content-center">
              <div className='max-w-250 bg_white p-4 service_card bg-white rounded-5'>
                 <div className='service_box bg_aashmani p-lg-1 '>
                  <img src={Dr} className='w-100' alt="dr image" />
                 </div>
                 <h3 className='ff_Slackey fs_lg  text-center'>
                  <span className='  fc_light'>
                  Veterinary
                  </span>
                 </h3>
                 <p className='ff_PoppinsRegular fc_light pt-lg-3 text-center'>
                 Perfect one you will like it. It’s our promise.
                 </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  pt-4 d-flex justify-content-center">
              <div className='max-w-250 bg_white p-4 service_card bg-white rounded-5'>
                 <div className='service_box bg_yellow '>
                  <img src={Hand} className='w-100' alt="hand image" />
                 </div>
                 <h3 className='ff_Slackey fs_lg  text-center'>
                  <span className='  fc_light'>
                  Cleaning
                  </span>
                 </h3>
                 <p className='ff_PoppinsRegular fc_light pt-lg-3 text-center'>
                 Perfect one you will like it. It’s our promise.
                 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container position-relative pb-md-5 pb-5 myContainer d-flex justify-content-center pt-md-3 pt-4 pt-lg-5">
            <button className='book_btn view_btn w-179 ff_PoppinsSemiBold fc_white fs_md  '>Learn More</button>
            <div className='position-absolute trangle '>
              <img src={Traingle} alt=" trangle" />
            </div>
        </div>

    </>
  )
}

export default Service