import React from 'react'
import Navbar from '../../utils/Navbar';
import Banner from './Banner';
import Main from './Main';

export default function UserProfile(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="course-details pb-lg--7 pt-4 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="middle-sidebar-left">
                {/* <Banner /> */}
                <Main />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
