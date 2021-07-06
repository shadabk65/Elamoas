import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';


function Top() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light"  >
        {/* <Navbar.Brand href="/">  </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-sm-3">
            
            {/* <NavDropdown title="Category" id="basic-nav-dropdown" active>
              {data.map((item) => {
                return (
                  <NavDropdown.Item key={item.id} href={item.url} > {item.category} </NavDropdown.Item>
                )
              })}
            </NavDropdown>  
             */}
            <Nav.Link  href="/">BECOME AN AGENT</Nav.Link>
            <Nav.Link  href="/">PRIVACY</Nav.Link>
            <Nav.Link  href="/">CUSTOMER SERVICE</Nav.Link>
          
          
          </Nav>
          
          
          <Nav>
            <Nav.Link  href="/profile">
            <i class="ti-user mr-2"></i> My Account
            </Nav.Link>
            <Nav.Link  href="/">
            <i class="ti-location-pin mr-2"></i> Store Locator
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default Top;