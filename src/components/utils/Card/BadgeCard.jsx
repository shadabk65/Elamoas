import React from 'react'

function BadgeCard() {
  return (
    <React.Fragment>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card mb-4 d-block w-100 shadow-xss rounded-lg p-xxl-5 p-4 border-0 text-center">
            <a href="#" className="position-absolute right-0 mr-4 top-0 mt-3"><i className="ti-more text-grey-500 font-xs"></i></a>
            <a href="#" className="btn-round-xxxl rounded-lg ml-auto mr-auto">
                <img src="/images/badges/bronze.png" alt="icon" className="w-100"/>
            </a>
            <h4 className="fw-700 font-xsss mt-4">Bronze User</h4>
            <p className="fw-500 font-xssss text-grey-500 mt-3">Learn new secrets to creating awesome Microsoft Access databases</p>
            <div className="clearfix"></div>
            <div className="progress mt-3 h10 position-relative w-100 left-0">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
            </div>
            <a href="#" className="mt-3 d-inline-block text-grey-900 fw-700 rounded-lg text-center font-xssss ls-3">UNLOCK</a>
        </div>
    </div>
    </React.Fragment>
  )
}

export default BadgeCard
