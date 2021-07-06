import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap'
import Router from 'next/router'
export default class login extends Component {
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
    // alert("sucess")
    console.log(this.state);
    Router.push('/tutor/dashboard')
  }

  render() {
    return (
      <React.Fragment>
          <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-12 col-sm-6 text-center mt-5 card'>
              <div className='display-4 mt-2 mb-4 login-head'>Login</div>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email"
                                placeholder="Enter email" 
                                autoFocus
                                name='email'
                                value={this.state.email}
                                onChange={this.handleChange}
                                required />
                  
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" 
                                placeholder="Password"
                                autoFocus
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                required />
                </Form.Group>
                <Button variant="primary"
                        size="lg" type="submit"
                        onClick={this.handleSubmit}
                        className='mb-4'>
                  Login
                </Button>

              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
