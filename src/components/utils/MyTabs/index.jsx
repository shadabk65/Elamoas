import React from 'react'
import { Tab,Nav,Col } from 'react-bootstrap'

export default function MyTabs(props) {
  return (
    <React.Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className='row' id='mytabs'>
          <div className='col-10'>
            <Nav variant="pills" className="flex-row xs-p-4 d-flex align-items-center justify-content-between
              shadow-xss rounded-lg overflow-hidden p-4
            ">
              <Nav.Item>
                <Nav.Link eventKey="first">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="8">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className='col-12 shadow-xss rounded-lg overflow-hidden p-4'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                dummy-1
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="6">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="7">
                dummy-2
              </Tab.Pane>
              <Tab.Pane eventKey="8">
                dummy-2
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </React.Fragment>
  )
}
