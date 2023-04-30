import React from 'react'
import "../Root.css"
import "../App.css"

import CatDogImg from "../assets/images/png/cat_dog.png"
import Profile1 from "../assets/images/png/profile_header1.png"
import Profile2 from "../assets/images/png/profile_header2.png"
import Profile3 from "../assets/images/png/profile_header3.png"
import Profile4 from "../assets/images/png/profile_header4.png"
import Profile5 from "../assets/images/png/profile_header5.png"
import DogFoot from "../assets/images/png/dog_foot.png"
import Circle from "../assets/images/svg/circle.svg"
import Smile from "../assets/images/svg/smile.svg"
import CardProfile from "../assets/images/png/card_pro.png"



function Header() {
  return (
      <div>
          <section className='position-relative '>
            <div className="container myContainer pb-lg-5">
              <div className="row align-items-center pt-lg-5">
                <div className="col-lg-6">
                    <div className='position-absolute  position_md_relative w_sm_100 w-50 max-w-641 top-0 start-0'>
                       <div>
                          <img src={CatDogImg} className='w-100 pt-4 pt-md-3 object_fit' alt="cat dog image" />
                       </div>
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className='postision-relative' >
                    <h1 className='fs_xxxl ff_Slackey pt-lg-3 pt-4 fc_main'>
                    We take care of your pet and help them to grow <span>
                      <img src={Smile} alt="" />
                    </span>
                    </h1>
                    <p className='ff_PoppinsMedium pt-lg-5 max_w_482 pb-lg-5 pt-3  fc_light fs_mds '>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
                    <div className='d-flex flex-col pt-3   pb-4 pb-lg-5'>
                      <button className='border-0 book_btn view_btn bg_orange ff_PoppinsMedium mb-3  mb-md-0 fs_md fc_white rounded-3 w_142 h_60 '>Contact us</button>

                      <ul className='d-flex align-items-center m-0 ps-sm-5 ps-3 pt-3 pt-md-0 pb-3 pb-md-0 curser_pointer'>
                        <li className='position-relative profile'><img src={Profile1} alt="profile" /></li>
                        <li className='position-relative profile1'><img src={Profile2} alt="profile" /></li>
                        <li className='position-relative profile2'><img src={Profile3} alt="profile" /></li>
                        <li className='position-relative profile3'><img src={Profile4} alt="profile" /></li>
                        <li className='position-relative profile4'><img src={Profile5} alt="profile" /></li>
                      </ul>
                    </div>
                      <div className='position-relative'>
                         <div className='position-absolute foot_man' >
                            <img src={DogFoot} className='w-100' alt="dog_foot" />
                         </div>
                         <h2 className='ff_Slackey ps-lg-5 fc_light'>
                    How to take care
                    </h2>
                    <p className='ff_PoppinsRegular ps-lg-5 fc_light'>perfect one you will like it. It’s our promise.</p>

                      </div>
                    <div className='position-absolute circle_head'>

                    <img src={Circle}  alt="circle_image" />

                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </section>
          <section>
            <div className="container pb-md-5 pt-md-5">
                 <div className="row position-relative ps-3 pe-3">
                     <div className='col-lg-12 pe-lg-0 position-relative  bottom-0 header_card_text'>
                     <div className="row">
                      <div className="col-lg-7">
                       <div className="row pb-md-5 pt-md-4">
                       
                        <div className="col-lg-4 pe-0  pt-5 pb-2  ">
                          <div className='d-flex flex-column border_0 border-right-white h_72 align-items-center'>
                          <ul className='p-0 curser_pointer curser_pointer'>
                            <li className='ff_PoppinsRegular pb-2 fc_white fs_xmd '>Adopted</li>
                            <li className='ff_Slackey fs_xl fc_white'>2500+</li>
                          </ul>
                             
                          </div>
                        </div>
                        <div className="col-lg-4 pe-0  pt-5 pb-2  ">
                          <div className='d-flex flex-column  border_0 border-right-white h_72    align-items-center'>
                          <ul className='p-0 curser_pointer'>
                            <li className='ff_PoppinsRegular pb-2 fc_white fs_xmd '>Customers</li>
                            <li className='ff_Slackey fs_xl fc_white'>1850+</li>
                          </ul>
                             
                          </div>
                        </div>
                        
                        <div className="col-lg-4 pe-0  pt-5 pb-4  pb-md-2 ">
                          <div className='d-flex flex-column  h_72    align-items-center'>
                          <ul className='p-0 curser_pointer'>
                            <li className='ff_PoppinsRegular pb-2 fc_white fs_xmd '>Testimonials</li>
                            <li className='ff_Slackey fs_xl fc_white'>1300+</li>
                          </ul>
                             
                          </div>
                        </div>
                        
                       </div>
                      </div>
                      <div className="col-lg-5">

                      </div>
                   
                     </div>

                     </div>
                     <div className='col-lg-5 pe-0 position-absolute position_md_relative ps-0 pt-5 pt-lg-0  end-0 bottom-0'>
                        <div className='header_card border_0 m-0'>
                          <p className='fc_white ff_PoppinsRegular fs_md ms-auto me-auto'>Lorem ipsum dolor sit amet, consectetur ipcing elit, sed do eiusmod tempor incididu ut labore et quis nostrud sed do eius .....
                          </p>
                           <div className="max-w-258 border-top">

                           </div>
                          <div className='d-flex justify-content-between align-item-end'>
                          <p className='ff_Slackey fc_white fs_xmd pt-4'>Daniel Kahneman</p>
                          <div className='position-relative bottom-0'>
                            <img src={CardProfile} alt=" profile" />
                          </div>
                          </div>
                        
                        </div>
                     </div>
                 </div>
            </div>
          </section>

          
    </div>
  )
}

export default Header