import React, {useState} from 'react'

const sidenavbar = () => {

    const[clicked , setclicked]= useState(false);
    const handleClick=()=>{
		setclicked(!clicked)
    }

    return (
        <div>
           
             <div className="menu-icon" onClick={handleClick}>
					<i className={clicked ? "fa fa-times" : " fa fa-bars" }></i>
				</div>
            <nav className={clicked ? "" : "navigation"}>
            <div className="container pl-0 pr-0">
                <div className="nav-content" onClick={handleClick}>
                      <div className="nav-top">
                        <a href="index.html">
                          <i className="feather-slack text-success display1-size mr-3 ml-3">
                          </i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xl logo-text mb-0">Elomoas. </span> 
                        </a>
                      
                    </div>
                    <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                    <ul className="mb-3">
                        <li className="logo d-none d-xl-block d-lg-block"></li>
                        <li><a href="/login" className="active nav-content-bttn open-font" data-tab="chats"><i className="feather-tv mr-3"></i><span>Course Feed</span></a></li>
                        <li><a href="/register" className="nav-content-bttn open-font" data-tab="friends"><i className="feather-shopping-bag mr-3"></i><span>Followers</span></a></li>
                        <li><a href="/index" className="nav-content-bttn open-font" data-tab="favorites"><i className="feather-globe mr-3"></i><span>Explore Channel</span></a></li>
                        <li><a href="default-live-stream.html" className="nav-content-bttn open-font" data-tab="favorites"><i className="feather-play-circle mr-3"></i><span>Live Stream</span></a></li>
                        <li className="flex-lg-brackets"><a href="default-user-profile.html" data-tab="archived" className="nav-content-bttn open-font"><i className="feather-video mr-3"></i><span>Saved Course</span></a></li>                        
                    </ul>
                </div>
            </div>
        </nav>




        </div>
    )
}

export default sidenavbar
