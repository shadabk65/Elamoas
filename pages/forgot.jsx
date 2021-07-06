import React, { Component } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Footer from '../src/components/Footer'

export default class forgot extends Component {


    constructor(props){
      super(props);

      this.state={
          password:'',
          password1:''
      }
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        alert("sucess")

        Router.push('/login')
    }

    render() {
        return (
          <div>
              <div className="container">
              <div className="row">
          <div className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat">
          <Image
            src="/images/login-bg-2.jpg"
            alt="register-pic"
            width={800}
            height={950}
            />

            </div>
            <div className="col-xl-7 vh-lg-100 align-items-center d-flex bg-white rounded-lg overflow-hidden">
                <div className="card shadow-none border-0 ml-auto mr-auto login-card">
                    <div className="card-body rounded-0 text-left">
                        <h2 className="fw-700 display1-size display2-md-size mb-4">Change <br />your password</h2>                        
                        <form onSubmit={this.handleSubmit}>
                            
                            
                            <div className="form-group icon-input mb-3">
                                <input type="Password"
                                 className="style2-input pl-5 form-control text-grey-900 font-xss ls-3" 
                                 placeholder="Old Password"
                                 name="password"
                                value ={this.state.password}
                                onChange = {this.handleChange}
                                
                                 />
                                <i className="font-sm ti-lock text-grey-500 pr-0"></i>
                            </div>
                            <div className="form-group icon-input mb-1">
                                <input type="Password" 
                                className="style2-input pl-5 form-control text-grey-900 font-xss ls-3" 
                                placeholder="New Password"
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
                            <div className="form-group mb-1">
                               <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0 ">Change Password</button></div>
                            
                        </div>


                        </form>
                         
                    </div>
                </div> 
            </div>
        </div>
            </div>

          <Footer />
          


            </div>
        )
    }
}
