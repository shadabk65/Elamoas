import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {data} from './data'

function MyNav(props) {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light"  className=''>
        <Navbar.Brand href="/"> 
          
            <h1 className="fredoka-font ls-3 fw-700 text-primary font-xxl">Elomoas 
              <span className="d-block font-xsssss ls-1 text-grey-500 open-font ">
                Online Learning Course
              </span>
            </h1>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-sm-3">
            
            <NavDropdown title="Pages Links" id="basic-nav-dropdown" active>
              {data.map((item) => {
                return (
                  <NavDropdown.Item key={item.id} href={item.url} > {item.title} </NavDropdown.Item>
                )
              })}
            </NavDropdown>  
            

            
            {/* <Nav.Link  href="/contact">Contact</Nav.Link>
            <Nav.Link href="/coursedetails">Course-Details</Nav.Link> */}
          
          
          </Nav>
          
          
          <Nav>
            <Nav.Link  href="/login">
              <button className='btn btn-md btn-login'>
                Login
              </button>
            </Nav.Link>

            <Nav.Link  href="/register">
              <button className='btn btn-md btn-signup'>
                Register
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default MyNav;
