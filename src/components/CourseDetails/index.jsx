import React from 'react'
import Banner from './Banner'
import SubCard from './SubCard'

import TopNav from '../utils/Navbar/Top';
import Navbar from '../utils/Navbar';
import Footer from '../Footer';

function Main(props) {
  return (
    <React.Fragment>
      <TopNav />
      <Navbar />
      <div className="course-details pt-lg--7 pb-lg--7 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <Banner />
            <SubCard />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Main;
