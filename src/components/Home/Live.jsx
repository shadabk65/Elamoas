import React from 'react'

export default function Live() {
  return (
    <React.Fragment>
      <div className="how-to-work pb-lg--7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="page-title style1 col-xl-8 col-lg-8 col-md-10 text-center mb-5">
                        <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">
                          Are you Looking for Live class ?</h2>
                        <p className="fw-300 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 mb-0 rounded-lg overflow-hidden live-stream bg-image-center bg-image-cover">
                            <div className="card-body d-flex justify-content-start p-2 position-absolute top-0 w-100 bg-gradiant-top">
                                <figure className="avatar mb-0 mt-0 overflow-hidden">
                                  <img src="https://via.placeholder.com/50x50.png" alt="image" 
                                  className="z-index-1 shadow-sm rounded-circle w40"/>
                                </figure>
                                <h5 className="text-white mt-1 fw-700 ml-2 z-index-1 ">
                                  Cabe Deo 
                                    <span className="d-block font-xsssss mt-1 fw-400 text-grey-300 z-index-1 ">
                                      2 hour</span>
                                </h5>
                                <span className="live-tag position-absolute right-15 mt-2 bg-danger p-2 z-index-1  rounded-lg text-white font-xsssss text-uppersace fw-700 ls-3">LIVE</span>
                            </div>
                            <div className="card-body text-center p-2 position-absolute w-100 bottom-0 bg-gradiant-bottom">
                                <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 mr-0 z-index-1"><i className="feather-grid text-white font-md"></i></a>
                                <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i className="feather-mic-off text-white font-md"></i></a>       
                                <a href="#" className="btn-round-xxl bg-danger z-index-1"><i className="feather-phone-off text-white font-md"></i></a>   
                                <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 z-index-1"><i className="ti-video-camera text-white font-md"></i></a>   
                                <a href="#" className="btn-round-xl d-md-inline-block d-none bg-blur m-3 ml-0 z-index-1"><i className="ti-settings text-white font-md"></i></a>  
                                <span className="p-2 bg-blur z-index-1 text-white fw-700 font-xssss rounded-lg right-15 position-absolute mb-4 bottom-0">44:00</span>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-5">
                        <div className="row">
                            <div className="col-lg-3 col-xs-6 col-sm-6">
                                <h2 className="display4-size display4-md-size fw-700 open-font mb-3">4.7</h2>
                                <div className="star d-block w-100 text-left">
                                    <img src="images/star.png" alt="star" className="w15"/>
                                    <img src="images/star.png" alt="star" className="w15"/>
                                    <img src="images/star.png" alt="star" className="w15"/>
                                    <img src="images/star.png" alt="star" className="w15"/>
                                    <img src="images/star-disable.png" alt="star" className="w15"/>
                                </div>
                                <h4 className="font-xssss text-grey-900 fw-700 mt-2">433 rating Based</h4>
                            </div>

                            <div className="col-lg-3 col-xs-6 col-sm-6">
                                <h2 className="display4-size display4-md-size fw-700 open-font mb-3">210<span className="font-xxl">%</span> <i className="feather-arrow-up-right text-success font-xl"></i></h2>
                                <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
                                <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
                            </div>

                            <div className="col-lg-3 col-xs-6 col-sm-6">
                                <h2 className="display4-size display4-md-size fw-700 open-font mb-3">20<span className="font-xxl">%</span> <i className="feather-arrow-down-right text-danger font-xl"></i></h2>
                                <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
                                <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
                            </div>

                            <div className="col-lg-3 col-xs-6 col-sm-6">
                                <h2 className="display4-size display4-md-size fw-700 open-font mb-3">43K<span className="font-xxl">+</span> <i className="feather-arrow-up-right text-success font-xl"></i></h2>
                                <h4 className="font-xssss text-grey-500 fw-600 mt-2"> 433 rating</h4>
                                <h4 className="font-xssss text-grey-900 fw-700 mt-2">Increase in revenue</h4>
                            </div>
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
