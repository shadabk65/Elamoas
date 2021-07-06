import React, { Component } from 'react'
import {brands} from './data';
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default class brand extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="brand-wrapper pt-5 pb-7">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <OwlCarousel className="owl-theme" loop margin={10} nav  
                            >
                              {brands.map((item) => {
                                return (
                                  <div className="item text-center" key={item.id}>
                                  
                                    <img src={item.img} alt={item.name} className="w100 ml-auto mr-auto"/>
                                  </div>
                                )
                                })}
                          </OwlCarousel>
                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    )
}
}
