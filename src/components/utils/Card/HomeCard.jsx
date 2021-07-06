import React from 'react';
import PrettyRating from "pretty-rating-react";
import Link from 'next/link'

import {
  faStarHalfAlt,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar
} from "@fortawesome/free-regular-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

const colors = {
  star: ['#d9ad26', '#d9ad26', '#434b4d'],
};
export default function Card(props) {
  return (
    <React.Fragment>
      <div className="card w-100 p-0 shadow-xss border-0 rounded-lg overflow-hidden mr-1">
          <div className="card-image w-100 mb-3">
              <Link href='/coursedetails'><a className="video-bttn position-relative d-block">
                <img src={props.img} alt={props.title} className="w-100"/>
              </a></Link>
          </div>
          <div className="card-body pt-0">
              <span className={`font-xsssss fw-700 pl-3 pr-3 lh-32 text-uppercase rounded-lg ls-2 alert-${props.titleType} d-inline-block text-${props.titleType} mr-1`}>
                {props.title}
              </span>
              <span className="font-xss fw-700 pl-3 pr-3 ls-2 lh-32 d-inline-block text-success float-right">
                <span className="font-xsssss">$</span> {props.price} </span>
              <h4 className="fw-700 font-xss mt-3 lh-28 mt-0">
                <a href="default-course-details.html" className="text-dark text-grey-900">
                  {props.name}
                </a>
              </h4>
              
              <h6 className="font-xssss text-grey-500 fw-600 ml-0 mt-2"> 
                {props.lesson}  <span className="float-right mt-1 font-xssss text-grey-500">{props.progress}</span>
              </h6>
              
              <div className="progress mt-4 h5 w-100 mb-3">
                
                <div className={`progress-bar bg-${props.type}`} role="progressbar"
                  style = {{width: `${props.progress}%`}} aria-valuenow={props.progress} 
                  aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
              
              <div className="star float-left text-left mb-0">
                  <PrettyRating value={props.rating} icons={icons.star} colors={colors.star} />
              </div>
              <p className="review-link mt-0 font-xssss float-right mb-2 fw-500 text-grey-500 lh-3"> {props.reviews} customer review</p>
          </div>
      </div>
  
    </React.Fragment>
  )
}
