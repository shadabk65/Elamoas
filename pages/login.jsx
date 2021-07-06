import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {login} from '../src/redux/action/onLogin'

import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

import Footer from '../src/components/Footer';
import Navbar from '../src/components/utils/Navbar';


class Login extends Component {
      
    constructor(props){
      super(props);

      this.state={
          email:'',
          password:''
      }

    }
    handleChange = (e) =>{
      this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
      e.preventDefault();
      const data = this.state;
      console.log(data);
      this.props.login(data);
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
                src="/images/login-bg-1.jpg"
                alt="login-pic"
                width={800}
                height={950}
                />
              </div>
              <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
                  <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                      <div className="card-body rounded-0 text-left">
                          <h2 className="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                          <form action="" onSubmit={this.handleSubmit}>
                              
                              <div className="form-group icon-input mb-3">
                                  <i className="font-sm ti-email text-grey-500 pr-0"></i>
                                  <input type="email" 
                                  className="style2-input pl-5 form-control text-grey-900 font-xsss fw-600"
                                    placeholder="Your Email Address" 
                                    name="email"
                                  value ={this.state.email}
                                  onChange = {this.handleChange}
                                    />                        
                              </div>
                              <div className="form-group icon-input mb-1">
                                  <input type="Password" 
                                  className="style2-input pl-5 form-control text-grey-900 font-xss ls-3" 
                                  placeholder="Password" 
                                  name="password"
                                  value ={this.state.password}
                                  onChange = {this.handleChange}
                                  />
                                  <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                              </div>
                              <div className="form-check text-left mb-3">
                                  <input type="checkbox"
                                    className="form-check-input mt-2" 
                                    id="exampleCheck1"
                                    />
                                  <label className="form-check-label font-xsss text-grey-500" htmlFor="exampleCheck1">Remember me</label>
                                  <Link href="/forgot"><a className="fw-600 font-xsss text-grey-700 mt-1 float-right">Forgot your Password?</a></Link>
                              </div>


                              <div className="col-sm-12 p-0 text-left">
                              <div className="form-group mb-1"><button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Login</button></div>
                              <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">Dont have account <Link href="/register"><a className="fw-700 ml-1">Register</a></Link> </h6>
                          </div>


                          </form>
                            
                          <div className="col-sm-12 p-0 text-center mt-2">
                              
                              <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">Or, Sign in with your social account </h6>
                              <div className="form-group mb-1"><Link href="#" ><a className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2"><img src="/images/icon-1.png" alt="icon" className="ml-2 w40 mb-1 mr-5" /> Sign in with Google</a></Link></div>
                              <div className="form-group mb-1"><Link href="#" ><a className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0 "><img src="/images/icon-3.png" alt="icon" className="ml-2 w40 mb-1 mr-5" /> Sign in with Facebook</a></Link></div>
                          </div>
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
// export default Login;

// connect action and store and component
Login.propTypes = {
  login: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  login
})(Login);
