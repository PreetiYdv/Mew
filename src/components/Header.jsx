import React from 'react'
import "../Root.css"
import "../App.css"
import CatImg from "../assets/image/png/cat_image.png"
import Dog from "../assets/image/png/dog_image.png"



function Header() {
  return (
      <div>
          <section className='position-relative'>
            <div className="container">
              <div className="row align-items-center pt-lg-5">
                <div className="col-md-6">
                    <div className='position-absolute  top-0 start-0'>
                      <div className='position-relative'>
                        <img src={CatImg}  className='w-100 rounded-end' alt="immm" />
                        <div className='position-absolute end-0 rounded-5 border-2 overflow-hidden'>
                          <img src={Dog} alt="dog" />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                  <div className='postision-relative' >
                    <h1 className='fs_xxxl ff_Slackey fc_main'>
                    We take care of your pet and help them to grow <span>
                      <img src="" alt="" />
                    </span>
                    </h1>
                    <p className='ff_PoppinsMedium pt-lg-5 max_w_482 pb-lg-5 fc_light fs_mds '>Best pets are waiting for adoption. Find out the the perfect one you will like it. It’s our promise.</p>
                    <div className='d-flex justify-content-between pb-lg-5'>
                      <button className='border-0 bg_orange ff_PoppinsMedium fs_md fc_white rounded-4 w_142 h_60 '>Contact us</button>

                      <div>
                            image
                      </div>
                    </div>
                    <h2 className='ff_Slackey ps-lg-5 fc_light'>
                    How to take care
                    </h2>
                    <p className='ff_PoppinsRegular ps-lg-5 fc_light'>perfect one you will like it. It’s our promise.</p>

                    <div className='position-absolute'>

                    <img  alt="circle_image" />

                    </div>
                  </div>
                </div>
              </div>  
            </div>
          </section>
          <section>
            <div className="container">
                 <div className="row">
                    
                 </div>
            </div>
          </section>

          
    </div>
  )
}

export default Header