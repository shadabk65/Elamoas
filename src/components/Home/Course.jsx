import React from 'react';
import Card from  '../utils/Card/HomeCard';
import {cardData} from './data';

export default function Course() {
  return (
    <React.Fragment>
          <div className="how-to-work pb-lg--7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="page-title style1 col-xl-6 col-lg-8 col-md-10 text-center mb-5">
                        <h2 className="text-grey-900 fw-700 display1-size display2-md-size pb-3 mb-0 d-block">Online Popular Course</h2>
                        <p className="fw-300 font-xsss lh-28 text-grey-500">orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
                <div className="row">
                  {cardData.map((item) => {
                    return (
                      <div key = {item.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                        <Card {...item}  key = {item.id} />
                      </div>
                    )
                  })}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
};
