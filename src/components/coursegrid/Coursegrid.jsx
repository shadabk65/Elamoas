import { useState } from "react"
import {courseData} from './coursedata';
import Link from 'next/link'
import Pagination from "./pagination";

const Coursegrid = () => {

    return (
        <div>
            
        <div className="container">
        <div className="row">
            {courseData.map((item)=>{

                return(
                <div className="col-xl-4 col-xxxl-3 col-lg-6 col-md-6 col-sm-6 mb-4" key={item.id}>

                        <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
                            <div className="card-image float-left w-100 mb-3">
                                <a href="/coursedetails" className="video-bttn position-relative d-block"><img src={item.img} alt="image" className="w-100" /></a>
                            </div>
                            <div className="card-body float-left  pt-0">
                                <span className="font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-warning d-inline-block text-warning mr-1">{item.title}</span>
                                <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right"><span className="font-xsssss">$</span>{item.price}</span>
                                <h4 className="fw-700 font-xss mt-3 lh-28 mt-0"><a href="default-course-details.html" className="text-dark text-grey-900">{item.name} </a></h4>
                                <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> {item.lesson} </h6>
                                <ul className="memberlist mt-3 mb-2 ml-0 d-block">
                                    <li><Link href="#"><a><img src="/images/course/user-1.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                    <li><Link href="#"><a><img src="images/course/user-2.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                    <li><Link href="#"><a><img src="images/course/user-3.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                    <li><Link href="#"><a><img src="images/course/user-4.png" alt="user" className="w30 d-inline-block" /></a></Link></li>
                                    <li className="last-member"><Link href="#"><a className="bg-greylight fw-600 text-grey-500 font-xssss ls-3 text-center">+2</a></Link></li>
                                    <li className="pl-4 w-auto"><Link href="#"><a className="fw-500 text-grey-500 font-xssss">Student apply</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                )})}

             <Pagination />

        </div>
    </div>
    </div>
    )
}

export default Coursegrid
