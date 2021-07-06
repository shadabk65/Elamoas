import React from 'react'

function banner() {
  return (
    <React.Fragment>
        <div className="banner-wrapper bg-after-fluid">
          <div className="container">
              <div className="row">
                  
                  <div className="col-xl-6 col-lg-5 order-lg-2 ">
                      <img src="/images/home.png" alt="image" className="pt-lg--10 w-100 aos-init"
                      />
                  </div>
                  <div className="col-xl-6 col-lg-7 order-lg-1 pt-lg--10 pb-lg--10 xl-p-5">
                      <h2 className="display2-size display2-md-size fw-700 aos-init ms-sm-5 ms-2" 
                      >Find the perfect Online Course for your Future
                      </h2>
                      <p className="display2-sm-size ml-5"> Trusted by 500k+ students </p>    
                      <h4 className="text-grey-500 font-xssss fw-500 ml-1 aos-init lh-24 ms-sm-5 ms-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">Which Course would you like to enroll in?</h4>
                      <div className="form-group mt-lg-5 p-3 border-light border p-2 bg-white rounded-lg aos-init ms-sm-5 ms-2" >
                          <div className="row ">
                              <div className="col-lg-5">
                                  <div className="form-group icon-input mb-0">
                                      <i className="ti-search font-xs text-grey-400"></i>
                                      <input type="text" className="style1-input bg-transparent border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500" 
                                        placeholder="Search online courses.."/>
                                  </div>
                              </div>

                              <div className="col-lg-4">
                                  <div className="form-group icon-input mb-0">
                                      <i className="ti-package font-xs text-grey-400"></i>
                                      <select className="style1-select bg-transparent border-0 pl-5"> 
                                      <option value="">All Categories</option>
                                      <option value="151781441596 ">SSC-CGL/CHSL</option>
                                      <option value="139119624252 ">Target UPSC CSE 2022 (Batch-3)</option>
                                      <option value="139118313532 ">UPSC CSE/ IAS 2024-25 (Batch-3)</option>
                                      <option value="139360141372 ">UPSC CSE/IAS 2023-24 (BATCH-3)</option>
                                      <option value="152401903676 ">UPSC CSE/IAS 2022-23 (BATCH-3)</option>
                                      <option value="138866720828 ">TARGET UPSC 2021/2022</option>
                                      <option value="138866917436 ">PSIR</option>
                                      <option value="138866985363 ">Civil Engineering</option>
                                      <option value="138866987589 ">Zoology</option>
                                      </select>
                                  </div>
                              </div>
                              <div className="col-lg-3">
                                  <a href="#" className="w-100 d-block btn bg-primary text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">
                                    Search
                                  </a>
                              </div>
                          </div>
                      </div>
                      <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24 ms-sm-5 ms-2"> <b className="text-grey-800">Popular Search :</b> SSC-CGL/CHSL, PSIR, Civil Engineering, Zoology </h4>
                  </div>
              </div>
          </div>
      </div>


      
    </React.Fragment>
  )
}

export default banner;
