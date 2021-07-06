import React, { Component } from 'react';
import Sidebar from '../../../src/components/utils/Sidebar';
import UserList from '../../../src/components/Tutor/UserList';

class addcourse extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-sm-3">
              <Sidebar />
            </div>
            <div className="col-12 col-sm-8">
              <h3 className='fw-500 font-lg mt-4 mb-4 ms-4'>
                List of Users that Subscribed your Course. 
              </h3>
              <UserList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default addcourse;