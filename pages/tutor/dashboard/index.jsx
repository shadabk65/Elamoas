import React, { Component } from 'react';
import Sidebar from '../../../src/components/utils/Sidebar';
import CourseList from '../../../src/components/Tutor/CourseList';
import Intro from '../../../src/components/Tutor/Intro';

class dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row ">
            <aside className="col-12 col-sm-3">
              <Sidebar></Sidebar>
            </aside>
            <div className="col-12 col-sm-8">
              <Intro userName="User" />
              <CourseList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default dashboard;