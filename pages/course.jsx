import React, { Component } from 'react'
import Coursegrid from '../src/components/coursegrid/Coursegrid'
import Footer from '../src/components/Footer'

import Navbar from '../src/components/utils/Navbar';

export default class course extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                  <Navbar />
        <div className="blog-page pt-lg--7 pb-lg--7 pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="card rounded-xxl p-lg--5 border-0 bg-no-repeat" style={{ backgroundColor:"#e4f7fe" }}>
                            <div className="card-body w-100 p-4">
                                <div className="form-group mt-3 p-3 border-light border p-2 bg-white rounded-lg">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="form-group icon-input mb-0">
                                                <i className="ti-search font-xs text-grey-400"></i>
                                                <input type="text" 
                                                className="style1-input border-0 pl-5 font-xsss mb-0 text-grey-500 fw-500 bg-transparent" 
                                                placeholder="Search online courses.." 
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="form-group icon-input mb-0">
                                                <i className="ti-package font-xs text-grey-400"></i>
                                                <select className="style1-select bg-transparent border-0 pl-5"> 
                                                <option value="">All Categories</option>
                                                <option value="151781441596 ">Fashion</option>
                                                <option value="139119624252 ">- Men</option>
                                                <option value="139118313532 ">- Women</option>
                                                <option value="139360141372 ">Electronics</option>
                                                <option value="152401903676 ">Home &amp; Garden</option>
                                                <option value="138866720828 ">- Decor</option>
                                                <option value="138866917436 ">- Lighting</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <a href="#" className="w-100 d-block btn bg-current text-white font-xssss fw-600 ls-3 style1-input p-0 border-0 text-uppercase ">Search</a>
                                        </div>
                                    </div>
                                </div>
                                <h4 className="text-grey-500 font-xssss fw-500 ml-1 lh-24"> <b className="text-grey-800 text-dark">Popular Search :</b> Designer, Developer, PHP, HTML, CSS, SCSS </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 pt-2 mb-4">
                        <h2 className="/src">Search <b>Results</b> <span className="fw-500 ml-2 text-grey-500 font-xssss">( 23 course is found )</span> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs"></i></a></h2>
                    </div>
                    </div>

                 <div className="row">
                 <Coursegrid />
                 </div>


                    </div>
                    </div>
                 <Footer />
                </React.Fragment>
            </div>
        )
    }
}
