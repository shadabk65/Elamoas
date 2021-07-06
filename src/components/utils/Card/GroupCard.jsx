import React from 'react'

export default function GroupCard() {
  return (
    <React.Fragment>
      <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
              <a href="#" className="position-absolute right-0 mr-4 top-0 mt-3"><i className="ti-more text-grey-500 font-xs"></i></a>
              <a href="#" className="btn-round-xxxl rounded-lg bg-lightblue ml-auto mr-auto">
                  <img src="/images/group/bootstrap.png" alt="icon" className="p-1"/>
              </a>
              <h4 className="fw-700 font-xs mt-4">Product Design</h4>
              <p className="fw-500 font-xssss text-grey-500 mt-3">Learn new secrets to creating awesome.</p>
              <div className="clearfix"></div>
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-success d-inline-block text-success mb-1 mr-1">Full Time</span>
              <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 bg-lightblue d-inline-block text-grey-800 mb-1 mr-1">Desiner</span>
              <div className="clearfix"></div>
              <ul className="memberlist mt-4 mb-2">
                  <li><a href="#"><img src="/images/group/p1.png" alt="user" className="w30 d-inline-block"/></a></li>
                  <li><a href="#"><img src="/images/group/p2.png" alt="user" className="w30 d-inline-block"/></a></li>
                  <li><a href="#"><img src="/images/group/p3.png" alt="user" className="w30 d-inline-block"/></a></li>
                  <li><a href="#"><img src="/images/group/p4.png" alt="user" className="w30 d-inline-block"/></a></li>
                  <li className="last-member"><a href="#" className="bg-greylight fw-600 text-grey-500 font-xssss ls-3">+2</a></li>
                  <li className="pl-4 w-auto"><a href="#" className="fw-500 text-grey-500 font-xssss">Student apply</a></li>
              </ul>
              
              <a href="#" className="p-2 mt-4 d-inline-block text-white fw-700 lh-30 rounded-lg w200 text-center font-xsssss ls-3 bg-current">APPLY NOW</a>
          </div>
      </div>
    </React.Fragment>
  )
}
