import React, { Component } from 'react';
import AddCourse from '../../../src/components/Tutor/AddCourse';
import Sidebar from '../../../src/components/utils/Sidebar';

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
              <AddCourse />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default addcourse;