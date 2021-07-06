import React, {useState} from 'react';
import Link from 'next/link'
import Router from 'next/router'
const Sidebar = () => {

    const[clicked , setclicked]= useState(false);
    const handleClick=()=>{
		setclicked(!clicked)
    }

    return (
        <React.Fragment>        
          <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? "fa fa-times" : " fa fa-bars" }></i>
          </div>

          <nav className={clicked ? "" : "navigation"} >
            <div className="container pl-0 pr-0">
                <div className="nav-content" onClick={handleClick}>
                
                    <div className="nav-top">
                      <Link href="/"><a>
                          <i className="feather-slack text-success display1-size mr-3 ml-3">
                          </i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">
                            Elomoas. 
                          </span> 
                        </a>
                      </Link>
                    </div>

                    <ul className="mb-3">
                        <li className="logo d-none d-xl-block d-lg-block"></li>
                        
                        <li>
                          <Link href="/tutor/dashboard"><a className="nav-content-bttn open-font">
                            <i className="fa fa-fw fa-home mr-3"></i><span>Dashboard</span></a>
                          </Link>
                        </li>
                        
                        <li>
                          <Link href="/tutor/dashboard/users"><a  className="nav-content-bttn open-font" >
                            <i className="fa fa-fw fa-book mr-3"></i><span>Users List</span></a>
                          </Link>
                        
                        </li>
                        
                        <li>
                          <Link href="/tutor/dashboard/addcourse" ><a className="nav-content-bttn open-font">
                            <i className="fa fa-fw fa-plus-circle mr-3"></i><span>Add Course</span></a>
                          </Link>
                        </li>
                        <li>
                          <Link  href="/tutor/dashboard/coursecategory"><a className="nav-content-bttn open-font" >
                            <i className="fa fa-fw fa-info-circle mr-3"></i><span>Course Categories</span></a>
                          </Link> 
                        </li>
                        <li className="flex-lg-brackets">
                          <Link href="/tutor/login"><a className="nav-content-bttn open-font">
                            <i className="fa fa-fw fa-sign-in mr-3"></i><span>Logout</span></a>
                          </Link>
                        </li>                        
                    </ul>
                </div>
            </div>
          </nav>

      </React.Fragment>
    )
}

export default Sidebar;
