import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {signupNewUser} from '../src/redux/action/onSignup'


import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

import Footer from '../src/components/Footer';
import Navbar from '../src/components/utils/Navbar';


class Register extends Component {
    constructor(props){
        super(props);

      this.state={
          username:'',
          email:'',
          password:'',
          password1:''
      }

    }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const userData = {
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        };
        console.log("Sign up "+ userData);
        this.props.signupNewUser(userData);
        Router.push('/')
    }

    render() {
        return (
        <React.Fragment>
          <Navbar />
          <div className="container">
            <div className="row">
          <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat" >
            <Image
            src="/images/login-bg-2.jpg"
            alt="register-pic"
            width={800}
            height={950}
            />
            </div>
            <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
                <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-4">Create <br />your account</h2>                        
                        <form  onSubmit={this.handleSubmit}>
                            
                            <div className="form-group icon-input mb-3">
                                <i className="font-sm ti-user text-grey-500 pr-0"></i>
                                <input type="text" 
                                className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" 
                                placeholder="Your Name" 
                                name="username"
                                value ={this.state.username}
                                onChange = {this.handleChange}
                                />                        
                            </div>
                            <div className="form-group icon-input mb-3">
                                <i className="font-sm ti-email text-grey-500 pr-0"></i>
                                <input type="text" 
                                className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600" 
                                placeholder="Your Email Address" 
                                name="email"
                                value ={this.state.email}
                                onChange = {this.handleChange}
                                
                                />                        
                            </div>
                            <div className="form-group icon-input mb-3">
                                <input type="Password" 
                                className="style2-input pl-5 form-control text-grey-900 font-xss ls-3" 
                                placeholder="Password"
                                name="password"
                                value ={this.state.password}
                                onChange = {this.handleChange}
                                
                                />
                                <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div className="form-group icon-input mb-1">
                                <input type="Password" 
                                className="style2-input pl-5 form-control text-grey-900 font-xss ls-3" 
                                placeholder="Confirm Password"
                                name="password1"
                                value ={this.state.password1}
                                onChange = {this.handleChange}
                                />
                                <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div className="form-check text-left mb-3">
                                <input type="checkbox" className="form-check-input mt-2" id="exampleCheck1" />
                                <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck1">Accept Term and Conditions</label> 

                            </div>

                            <div className="col-sm-12 p-0 text-left">
                            <div className="form-group mb-1"><button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Register</button></div>
                            <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Already have account <Link href="/login"><a className="fw-700 ml-1">Login</a></Link></h6>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
          </div>


          <Footer />
          </React.Fragment>
        )
    }
}

//connect
Register.propTypes = {
  signupNewUser: PropTypes.func.isRequired,
  createUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  createUser: state.createUser
});

export default connect(mapStateToProps, {
  signupNewUser
})(Register);
