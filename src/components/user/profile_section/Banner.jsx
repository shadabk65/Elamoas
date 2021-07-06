import React from 'react'

export default function Banner() {
  return (
    <React.Fragment>
      <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-3" style="background-image: url(https://via.placeholder.com/1200x600.png);">
        <div className="card-body p-lg-5 p-4 bg-black-08">
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-lg-12 pl-lg-5 pt-lg-5">
                    <figure className="avatar ml-0 mb-4 position-relative w100 z-index-1">
                      <img src="https://via.placeholder.com/100x100.png" alt="image" 
                        className="float-right p-1 bg-white rounded-circle w-100"/>
                    </figure>
                </div>
                <div className="col-lg-4 pl-lg-5 pb-lg-5 pb-3">
                    
                    <h4 className="fw-700 font-md text-white mt-3 mb-1">Hendrix Stamp <i className="ti-check font-xssss btn-round-xs bg-success text-white ml-1"></i></h4>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-0">support@gmail.com</span>
                    <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Desinger</span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">PHP</span>
                    <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
                    <ul className="memberlist mt-3 mb-2 ml-0">
                        <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block"/></a></li>
                        <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block"/></a></li>
                        <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block"/></a></li>
                        <li><a href="#"><img src="https://via.placeholder.com/30x30.png" alt="user" className="w30 d-inline-block"/></a></li>
                        <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 text-center font-xssss ls-3">+2</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-4 d-block">
                    <h2 className="display5-size text-white fw-700 lh-1 mr-3">98 <i className="feather-arrow-up-right text-success font-xl"></i></h2>
                    <h4 className="text-white font-sm fw-600 mt-0 lh-3">Your learning level points! </h4>

                </div>
                <div className="col-lg-3 mt-4">
                    <div id="chart-users-blue3" className="mt-2"></div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}
