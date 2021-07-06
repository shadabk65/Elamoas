import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Auther = () => {
    return (
        <div>
            <div className="course-details pb-lg--7 pt-4 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="middle-sidebar-left">
                            <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden mb-3">
                                <div className="card-body position-relative h200 bg-gradiant-bottom bg-image-cover bg-image-center" style={{backgroundImage: "url("+"/images/auther.jpg"+")" }}>
                                </div>
                                <div className="card-body d-block w-100 pl-5 pr-4">
                                    <figure className="avatar ml-0 mb-0 mt--6 position-relative w90 z-index-1"><img src="/images/author-user.png" alt="image" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                                    <div className="clearfix"></div>
                                    <div className="row">
                                        <div className="col-6">
                                            <h4 className="fw-700 font-xs mt-3 mb-1">Aliqa Macale <i className="ti-check font-xssss btn-round-xs bg-success text-white ml-1"></i></h4>
                                            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-0">support@gmail.com</span>
                                            <span className="dot ml-2 mr-2 d-inline-block btn-round-xss bg-grey"></span>
                                            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">Desinger</span>
                                            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">PHP</span>
                                            <span className="font-xssss fw-600 text-grey-500 d-inline-block ml-1">HTML5</span>
                                        </div>
                                        <div className="col-6 text-right">
                                            <ul className="d-flex align-items-center mt-2 float-left">
                                                <li className="mr-2"><Link href="#"><a className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></Link></li>
                                                <li className="mr-2"><Link href="#"><a className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></Link></li>
                                                <li className="mr-2"><Link href="#"><a className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></Link></li>
                                                <li className="mr-2"><Link href="#"><a className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></Link></li>
                                                <li className="mr-2"><Link href="#"><a className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></Link></li>
                                            </ul>
                                            <Link href="#"><a className="mt-2 p-0 btn p-2 lh-24 w100 ml-1 ls-3 d-inline-block rounded-xl bg-primary font-xsssss fw-700 ls-lg text-white">FOLLOW</a></Link>
                                            <Link href="#"><a className="btn-round-md ml-3 mt-2 d-inline-block float-right rounded-lg bg-greylight add-wishlist">
                                                <i className="feather-bookmark font-sm text-grey-900"></i></a></Link>
                                        </div>
                                        <div className="col-12">
                                            <ul className="memberlist mt-3 mb-2 ml-0">
                                                <li><Link href="#"><a><img src="/images/author-icon1.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                                <li><Link href="#"><a><img src="/images/author-icon2.png"  alt="user" className="w30 d-inline-block" /></a></Link></li>
                                                <li><Link href="#"><a><img src="/images/author-icon3.png"  alt="user" className="w30 d-inline-block" /></a></Link></li>
                                                <li><Link href="#"><a><img src="/images/author-icon4.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                                <li className="last-member"><Link href="#"><a className="bg-greylight fw-600 text-grey-500 text-center font-xssss ls-3">+2</a></Link></li>
                                                <li className="pl-4 w-auto"><Link href="#"><a className="fw-500 text-grey-500 font-xssss">Subscirbed Member</a></Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-11">
                                            <h4 className="text-grey-800 font-xsss mt-4 fw-700">About me</h4>
                                            <p className="font-xssss fw-600 lh-28 text-grey-500 mb-0 pl-0">I have a Business Management degree from Bangalore University and a long time Excel expert. 
                                            I create professional Excel reports/dashboards for clients and conduct Excel workshops for business professionals. 
                                            Currently am a freelance motion graphics artist and a Music producer. I like to be productive and creative at work.
                                             I like to continuously increase my skills and stay in tuned with the technology industry.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>













                        </div>
                        </div>
                        </div>
                        </div>
                        </div>

        </div>
    )
}

export default Auther
