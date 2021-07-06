import React from 'react'
import { data,list,learnings } from './data';
import Accord from './Accord/Acord'


function Banner(props) {
  return (
    <React.Fragment>
      <div className="col-xl-8 col-xxl-9 col-lg-8">
          <div className="card border-0 mb-0 rounded-lg overflow-hidden">
              <div className="player shadow-none">
                  <video id='video' src='https://via.placeholder.com/1200x600.png' playsInline ></video>
                      <div className='play-btn-big'></div>
                      <div className='controls'>
                          <div className="time"><span className="time-current"></span><span className="time-total"></span></div>
                          <div className='progress'>
                              <div className='progress-filled'></div>
                          </div>
                          <div className='controls-main'>
                              <div className='controls-left'>
                                  <div className='volume'>
                                      <div className='volume-btn loud mt-1'>
                                          <i className="feather-volume-1 font-xl text-white"></i>
                                      </div>
                                      <div className='volume-slider'>
                                          <div className='volume-filled'></div>
                                      </div>
                                  </div>
                              </div>
                              <div className='play-btn paused'></div>
                              <div className="controls-right">
                                  <div className='speed'>
                                      <ul className='speed-list'>
                                          <li className='speed-item' data-speed='0.5'>0.5x</li>
                                          <li className='speed-item' data-speed='0.75'>0.75x</li>
                                          <li className='speed-item active' data-speed='1'>1x</li>
                                          <li className='speed-item' data-speed='1.5'>1.5x</li>
                                          <li className='speed-item' data-speed='2'>2x</li>
                                      </ul>
                                  </div>
                                  <div className='fullscreen'>
                                      <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0 0V-1.5H-1.5V0H0ZM0 18H-1.5V19.5H0V18ZM26 18V19.5H27.5V18H26ZM26 0H27.5V-1.5H26V0ZM1.5 6.54545V0H-1.5V6.54545H1.5ZM0 1.5H10.1111V-1.5H0V1.5ZM-1.5 11.4545V18H1.5V11.4545H-1.5ZM0 19.5H10.1111V16.5H0V19.5ZM24.5 11.4545V18H27.5V11.4545H24.5ZM26 16.5H15.8889V19.5H26V16.5ZM27.5 6.54545V0H24.5V6.54545H27.5ZM26 -1.5H15.8889V1.5H26V-1.5Z" transform="translate(2 2)" fill="white"/>
                                      </svg>
                                  </div>
                              </div>
                          

                      </div>
                  </div>
              </div>
          </div>
          <div className="card d-block border-0 rounded-lg overflow-hidden dark-bg-transparent bg-transparent mt-4 pb-3">
              <div className="row">
                  <div className="col-10"><h2 className="fw-700 font-md d-block lh-4 mb-2">Microsoft Access Development, Design and Advanced Methods Workshop Tutorial</h2></div>
                  <div className="col-2">
                      <a href="#" className="btn-round-md mb-1 ml-3 d-inline-block float-right rounded-lg bg-danger"><i className="feather-bookmark font-sm text-white"></i></a>
                      <a href="#" className="btn-round-md mb-1 ml-0 d-inline-block float-right rounded-lg bg-greylight" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="feather-share-2 font-sm text-grey-700"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right p-3 border-0 shadow-xss" x-placement="left-start" aria-labelledby="dropdownMenu2">
                          <ul className="d-flex align-items-center mt-0 float-left">
                              <li className="mr-2"><h4 className="fw-600 font-xss text-grey-900  mt-2 mr-3">Share: </h4></li>
                              <li className="mr-2"><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                              <li className="mr-2"><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                              <li className="mr-2"><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                              <li className="mr-2"><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                              <li className="mr-2"><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <span className="font-xssss fw-700 text-grey-900 d-inline-block ml-0 text-dark">Cassica Vanni</span>
              <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
              <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Developer</span>
              <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Design</span>
              <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Developer</span>
              <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
              <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Jquery</span>
              <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
              <span className="font-xssss fw-700 text-primary d-inline-block ml-0 ">Follow Author</span>
          </div>



          <div className="card d-block border-0 rounded-lg overflow-hidden mt-2">
            <Accord />
          </div>

          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 alert-success">
            <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 text-success mb-4">What you'll learn from this lesson</h2>
            {learnings.map(item => {
              return (
                <h4 className="font-xssss fw-600 text-grey-600 mb-3 pl-30 position-relative lh-24">
                  <i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>
                  {item}
                </h4>
              )
            })}
          </div>
          
          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4">
              <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">Description</h2>
              <div className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">
                {data.map( item => {
                  return (
                    <p key={item.id}>{item.desp}</p>
                  )
                })}
              </div>
          </div>

          <div className="card d-block border-0 rounded-lg overflow-hidden p-4 shadow-xss mt-4 mb-5">
              <h2 className="fw-700 font-sm mb-3 mt-1 pl-1 mb-3">Requirements</h2>
              <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 pl-2">After creating more than a dozen courses on Microsoft Access databases and programming in VBA, many students have contacted me with discussions on specific problems and scenarios.  From these discussions,</p>
              <ul className="list-style-disc pl-4 mt-3">
                {list.map(item => {
                  return (
                    <li key={item}>
                      <p className='font-xssss fw-500 lh-28 text-grey-500 mb-0 pl-2'> {item} </p>
                    </li>
                  )
                })}
            </ul>
          </div>
      </div>
    </React.Fragment>
  )
}

export default Banner;
