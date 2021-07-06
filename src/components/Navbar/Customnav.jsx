import React from 'react'
import Link from 'next/link'
const Customnav = () => {
    return (
        <div>
            

            <div className="header-wrapper pt-3 pb-3 shadow-none">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 navbar pt-0 pb-0">
                        <Link href="/index"><a><h1 className="fredoka-font ls-3 fw-700 text-current font-xxl">Elomoas <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">Online Learning Course</span></h1></a></Link> 
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav nav-menu float-none text-center">
                                <li className="nav-item dropdown"><Link href="#"><a className="nav-Link dropdown-toggle" data-toggle="dropdown">Home <i className="ti-angle-down"></i></a></Link>
                                    <div className="dropdown-menu">
                                        <Link href="/home-1"><a className="dropdown-item" >Home One</a></Link>
                                        <Link href="/home-2"><a className="dropdown-item" >Home Two</a></Link>
                                        <Link href="/home-3"><a className="dropdown-item">Home Three</a></Link>
                                        <Link href="/home-4"><a className="dropdown-item" >Home Four</a></Link>
                                        <Link href="/home-5"><a className="dropdown-item" >Home Five</a></Link>
                                        <Link href="/home-6"><a className="dropdown-item" >Home Six</a></Link>
                                        
                                        <Link href="/coming-soon"><a className="dropdown-item" >Coming Soon</a></Link>
                                        
                                    </div>
                                
                                </li>
                                <li className="nav-item dropdown"><Link href="#"><a className="nav-Link  dropdown-toggle" data-toggle="dropdown" >Pages <i className="ti-angle-down"></i></a></Link>
                                    <div className="dropdown-menu">
                                        <Link href="/about"><a className="dropdown-item" >About</a></Link>
                                        <Link href="/contact"><a className="dropdown-item" >Contact</a></Link>
                                        <Link href="/contact-two"><a className="dropdown-item" >Contact 2</a></Link>
                                        <Link href="/404"><a className="dropdown-item" >404</a></Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown"><Link href="#"><a className="nav-Link dropdown-toggle" data-toggle="dropdown">Blog <i className="ti-angle-down"></i></a></Link>
                                    <div className="dropdown-menu">
                                        <Link href="/blog.html"><a className="dropdown-item">Blog Default</a></Link>
                                       <Link href="/blog-sidebar.html"><a className="dropdown-item">Blog Sidebar</a></Link>
                                         
                                       <Link href="/blog-single.html"><a className="dropdown-item" >Blog Single</a></Link> 
                                        
                                    </div>
                                </li>
                                <li className="nav-item dropdown"><a className="nav-Link dropdown-toggle" href="#" data-toggle="dropdown">Course <i className="ti-angle-down"></i></a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="./courses-grid-1.html">Course Gird 1</a>
                                        <a className="dropdown-item" href="./courses-grid-2.html">Course Gird 2</a>
                                        <a className="dropdown-item" href="./courses-grid-3.html">Course Gird 3</a>
                                        <a className="dropdown-item" href="./course-details.html">Single Course 1</a>
                                        <a className="dropdown-item" href="./course-details-2.html">Single Course 2</a>
                                        <a className="dropdown-item" href="./user-profile.html">User Profile</a>
                                        <a className="dropdown-item" href="./author-profile.html">Author Profile</a>
                                    </div>
                                </li>
                                <li className="nav-item"><a className="nav-Link" href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right d-none d-lg-block">
                        <a href="login.html" className="header-btn bg-dark fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1">Login</a>
                        <a href="register.html" className="header-btn bg-current fw-500 text-white font-xssss p-2 lh-32 w100 text-center d-inline-block rounded-xl mt-1">Register</a>
                    </div>
                </div>
            </div>
        </div>
        





        </div>
    )
}

export default Customnav


        




