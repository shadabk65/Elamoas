import React, { Component } from 'react';
import Sidebar from '../../../src/components/utils/Sidebar';
import Category from '../../../src/components/Tutor/AddCourseCategory';

class AddCourseCategory extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12 col-sm-3">
              <Sidebar />
            </div>
            <div className="col-12 col-sm-8">
              <h3 className='fw-500 font-lg'>
                {/* Add a new category for your Course.  */}
              </h3>
              <Category />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCourseCategory;