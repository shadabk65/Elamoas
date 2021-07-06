import React from 'react'

export default function subscribe() {
  return (
    <React.Fragment>
      <div className="subscribe-wrapper pt-5 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card w-100 p-lg-5 p-4 rounded-xxl border-0"  id='sub'>
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-center">
                                    <h2 className="fw-700 text-grey-900 display2-size display2-md-size lh-3 mb-3">Subscribe up to our newsletter</h2>
                                </div>
                                <div className="col-lg-8 text-center">
                                    <p className="font-xsss lh-28 text-grey-500"> Lorem ipsum dolor sit amet consectetur adipisicing, elit. Neque facilis corporis perferendis, debitis error exercitationem reiciendis odio.</p>
                                </div>
                                <div className="col-lg-6 text-center mt-md-4 mb-3">
                                    <div className="form-group icon-right-input style2-input mb-0"><input type="text" placeholder="Enter Email Address" className="form-control style2 rounded-xl bg-white border-0 font-xsss fw-500 pl-3"/><i className="feather-mail text-primary font-lg m-1"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
