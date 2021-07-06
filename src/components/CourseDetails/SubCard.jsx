import React from 'react'

function SubCard() {
  return (
    <React.Fragment>
      <div className="col-xl-4 col-xxl-3 col-lg-4">
        <div className="card p-4 mb-4 bg-primary border-0 shadow-xss rounded-lg">
            <div className="card-body">
                <h2 className="text-white font-xsssss fw-700 text-uppercase ls-3 ">Starter</h2>
                <h1 className="display2-size text-white fw-700">€ 49</h1>
                <h4 className="text-white fw-500 mb-4 lh-24 font-xssss">For anyone validating Framer as a professional prototyping tool.</h4>
                <h4 className="text-white font-xssss mb-2"><i className="ti-check mr-2 text-white"></i> Unlimited views</h4>
                <h4 className="text-white font-xssss mb-2"><i className="ti-check mr-2 text-white"></i> Everything in Free</h4>
                <h4 className="text-white font-xssss mb-4"><i className="ti-check mr-2 text-white"></i> Private share links</h4>
                <a href="#" className="btn btn-block border-0 w-100 bg-white p-3 text-primary fw-600 rounded-lg d-inline-block font-xssss btn-light">Subscribe</a>

            </div>
        </div>

        <div className="card w-100 border-0 mt-0 mb-4 p-4 shadow-xss position-relative rounded-lg bg-white">
            <div className="row">
                <div className="col-5 pr-0">
                    <h2 className="display3-size lh-1 m-0 text-grey-900 fw-700">4.2</h2>
                </div>
                <div className="col-7 pl-0 text-right">
                    <div className="star d-block w-100 text-right">
                        <img src="images/star.png" alt="star" className="w10"/>
                        <img src="images/star.png" alt="star" className="w10"/>
                        <img src="images/star.png" alt="star" className="w10"/>
                        <img src="images/star.png" alt="star" className="w10"/>
                        <img src="images/star-disable.png" alt="star" className="w10"/>
                    </div>
                    <h4 className="font-xsssss text-grey-600 fw-600 mt-1">Based on 433 rating</h4>
                </div>
            </div>
            <div className="bg-greylight theme-dark-bg rounded-sm p-2 mt-3 mb-4">
                <div className="row mt-3">
                    <div className="col-3 pr-1 mt-0"><img src="images/star.png" alt="star" 
                    className="w10 float-left"/>
                    <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">5</h4></div>
                    <div className="col-7 pl-0 pr-2">
                        <div id="bar_1" data-value="45" className="bar-container">
                            <div className="bar-percentage" style={{width: '70%'}}></div>
                        </div>
                    </div>
                    <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">70%</h4></div>
                </div>
                <div className="row mt-1">
                    <div className="col-3 pr-1 mt-0"><img src="images/star.png" alt="star" 
                    className="w10 float-left"/>
                    <h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">4</h4></div>
                    <div className="col-7 pl-0 pr-2">
                        <div id="bar_1" data-value="45" className="bar-container">
                            <div className="bar-percentage" style={{width: '50%'}}></div>
                        </div>
                    </div>
                    <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">50%</h4></div>
                </div>
                <div className="row mt-1">
                    <div className="col-3 pr-1 mt-0"><img src="images/star.png" alt="star" className="w10 float-left"/><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">3</h4></div>
                    <div className="col-7 pl-0 pr-2">
                        <div id="bar_1" data-value="45" className="bar-container">
                            <div className="bar-percentage" style={{width: '40%'}}></div>
                        </div>
                    </div>
                    <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">40%</h4></div>
                </div>
                <div className="row mt-1">
                    <div className="col-3 pr-1 mt-0"><img src="images/star.png" alt="star" className="w10 float-left"/><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">2</h4></div>
                    <div className="col-7 pl-0 pr-2">
                        <div id="bar_1" data-value="45" className="bar-container">
                            <div className="bar-percentage" style={{width: '30%'}}></div>
                        </div>
                    </div>
                    <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">30%</h4></div>
                </div>
                <div className="row mt-1">
                    <div className="col-3 pr-1 mt-0"><img src="images/star.png" alt="star" className="w10 float-left"/><h4 className="font-xsss fw-600 text-grey-600 ml-1 float-left d-inline">1</h4></div>
                    <div className="col-7 pl-0 pr-2">
                        <div id="bar_1" data-value="45" className="bar-container">
                            <div className="bar-percentage" style={{width: '20%'}}></div>
                        </div>
                    </div>
                    <div className="col-2 pl-0"><h4 className="font-xssss fw-600 text-grey-800">20%</h4></div>
                </div>
            </div>

            <div className="row">
                <div className="col-2 text-left">
                    <figure className="avatar float-left mb-0">
                      <img src="https://via.placeholder.com/50x50.png" alt="image" className="float-right shadow-none w40 mr-2"/>
                    </figure>
                </div>
                <div className="col-10 pl-4">
                    <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                        <div className="star d-block w-100 text-left">
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star-disable.png" alt="star" className="w10"/>
                        </div>                            
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-2 text-left">
                    <figure className="avatar float-left mb-0">
                      <img src="https://via.placeholder.com/50x50.png" alt="image" 
                      className="float-right shadow-none w40 mr-2"/>
                    </figure>
                </div>
                <div className="col-10 pl-4">
                    <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                        <div className="star d-block w-100 text-left">
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star-disable.png" alt="star" className="w10"/>
                        </div>                            
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-2 text-left">
                    <figure className="avatar float-left mb-0">
                      <img src="https://via.placeholder.com/50x50.png" alt="image" 
                      className="float-right shadow-none w40 mr-2"/>
                    </figure>
                </div>
                <div className="col-10 pl-4">
                    <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                        <div className="star d-block w-100 text-left">
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star-disable.png" alt="star" className="w10"/>
                        </div>                            
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-2 text-left">
                    <figure className="avatar float-left mb-0"><img src="https://via.placeholder.com/50x50.png" 
                    alt="image" className="float-right shadow-none w40 mr-2"/>
                    </figure>
                </div>
                <div className="col-10 pl-4">
                    <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                        <div className="star d-block w-100 text-left">
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star.png" alt="star" className="w10"/>
                            <img src="images/star-disable.png" alt="star" className="w10"/>
                        </div>                            
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                    </div>
                </div>
            </div>

            <div className="row"><a href="#" className="d-block p-2 lh-32 w-100 text-center ml-3 mr-3 bg-greylight fw-600 font-xssss text-grey-900">Add a Review</a></div>
        </div>

        <div className="card shadow-xss rounded-lg border-0 p-4 mb-4">
            <h4 className="font-xs fw-700 text-grey-900 d-block mb-3">Modul <a href="#" className="float-right"><i className="ti-arrow-circle-right text-grey-500 font-xss"></i></a></h4>
            <div className="card-body d-flex p-0">
                <span className="bg-primary btn-round-xs rounded-lg font-xssss text-white fw-600">1</span>
                <span className="font-xssss fw-500 text-grey-500 ml-2">Introduction</span>
                <span className="ml-auto font-xssss fw-500 text-grey-500">12:34</span>
            </div>
            <div className="card-body d-flex p-0 mt-3">
                <span className="bg-primary btn-round-xs rounded-lg font-xssss text-white fw-600">2</span>
                <span className="font-xssss fw-500 text-grey-500 ml-2">Watch the videos</span>
                <span className="ml-auto font-xssss fw-500 text-grey-500">22:34</span>
            </div>

            <div className="card-body d-flex p-0 mt-3">
                <span className="bg-primary btn-round-xs rounded-lg font-xssss text-white fw-600">3</span>
                <span className="font-xssss fw-500 text-grey-500 ml-2"> Creating a sliding</span>
                <span className="ml-auto font-xssss fw-500 text-grey-500">34:34</span>
            </div>

            <div className="card-body d-flex p-0 mt-3">
                <span className="bg-primary btn-round-xs rounded-lg font-xssss text-white fw-600">4</span>
                <span className="font-xssss fw-500 text-grey-500 ml-2">Make a  Dropdown</span>
                <span className="ml-auto font-xssss fw-500 text-grey-500">40:34</span>
            </div>

            <div className="card-body d-flex p-0 mt-3">
                <span className="bg-primary btn-round-xs rounded-lg font-xssss text-white fw-600">5</span>
                <span className="font-xssss fw-500 text-grey-500 ml-2">Conclusion</span>
                <span className="ml-auto font-xssss fw-500 text-grey-500">2:34</span>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default SubCard
