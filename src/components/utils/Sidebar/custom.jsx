import React from 'react'
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Router from 'next/router'

function Custom(props) {
  return (
    <React.Fragment>
      <SideNav
          className="bg-primary main-sidebar"
          onSelect={(selected) => {
            // Add your code here
            const to = '/' + selected;
            if (location.pathname !== to) {
              Router.push(to)
            }
          }}
      >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Home
                  </NavText>
              </NavItem>
              
              <NavItem eventKey="login">
                    <NavIcon>
                        <i className="fa fa-fw fa-book" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Courses
                    </NavText>
              </NavItem>

              <NavItem eventKey="AddCourses">
                
                  <NavIcon>
                      <i className="fa fa-fw fa-plus-circle" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Courses Added
                  </NavText>
              </NavItem>


              <NavItem eventKey="courseDetails">
                  <NavIcon>
                      <i className="fa fa-fw fa-info-circle" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Course Details
                  </NavText>
              </NavItem>

              <NavItem eventKey="login">
                  <NavIcon>
                      <i className="fa fa-fw fa-sign-in" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Login
                  </NavText>
              </NavItem>


          </SideNav.Nav>
      </SideNav>
    </React.Fragment>
  )
}

export default Custom;
