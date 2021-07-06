import React from 'react'
import {Nav,Tab} from 'react-bootstrap'
import Card from  '../../utils/Card/HomeCard';
import {cardData} from '../../Home/data';
import BadgeCard from '../../utils/Card/BadgeCard';
import GroupCard from '../../utils/Card/GroupCard';
import FriendCard from '../../utils/Card/FriendCard';
import LiveCard from '../../utils/Card/LiveCard';

export default function Main() {
  return (
    <React.Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className='row' id='mytabs'>
          <div className='col-12 shadow-xss rounded-lg overflow-hidden p-4 mb-4'>
            <Nav variant="" className="flex-row xs-p-4 d-flex align-items-center justify-content-between
            ">
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="first">About</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="2">Video</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="3">Badge</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="4">Groups</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="5">Friends</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="6">Stream</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="7">Saved</Nav.Link>
              </Nav.Item>
              <Nav.Item className='my-tab-item'>
                <Nav.Link className='my-tab-item' eventKey="8">Live</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className='col-12 '>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="card d-block w-100 border-0 shadow-xss rounded-lg overflow-hidden p-4">
                  <div className="card-body mb-3 pb-0"><h2 className="fw-400 font-lg d-block">  <b>About Me</b> <a href="#" className="float-right"><i className="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <div className="card-body pb-0">
                      <div className="row">
                          <div className="col-xl-12">
                              <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">I have a Business Management degree from Bangalore University and a long time Excel expert. I create professional Excel reports/dashboards for clients and conduct Excel workshops for business professionals. Currently am a freelance motion graphics artist and a Music producer. I like to be productive and creative at work. I like to continuously increase my skills and stay in tuned with the technology industry.</p>
                              <p className="font-xssss fw-600 lh-28 text-grey-500 pl-0">I have a Business Management degree from Bangalore University and a long time Excel expert. I create professional Excel reports/dashboards for clients and conduct Excel workshops for business professionals. Currently am a freelance motion graphics artist and a Music producer. I like to be productive and creative at work. I like to continuously increase my skills and stay in tuned with the technology industry.</p>
                              <ul className="d-flex align-items-center mt-2 mb-3 float-left">
                                  <li className="mr-2"><a href="#" className="btn-round-md bg-facebook"><i className="font-xs ti-facebook text-white"></i></a></li>
                                  <li className="mr-2"><a href="#" className="btn-round-md bg-twiiter"><i className="font-xs ti-twitter-alt text-white"></i></a></li>
                                  <li className="mr-2"><a href="#" className="btn-round-md bg-linkedin"><i className="font-xs ti-linkedin text-white"></i></a></li>
                                  <li className="mr-2"><a href="#" className="btn-round-md bg-instagram"><i className="font-xs ti-instagram text-white"></i></a></li>
                                  <li className="mr-2"><a href="#" className="btn-round-md bg-pinterest"><i className="font-xs ti-pinterest text-white"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block">My  <b>Courses</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  {cardData.map((item) => {
                    return (
                      <div key = {item.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                            <Card {...item}  key = {item.id} />
                          </div>
                        )
                      })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <div className="row">
                <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block">My  <b>Badges</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <BadgeCard />
                  <BadgeCard />
                  <BadgeCard />
                  <BadgeCard />
                  <BadgeCard />
                  <BadgeCard />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block"> <b>Groups</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block">My  <b>Friends</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <FriendCard />
                  <FriendCard />
                  <FriendCard />
                  <FriendCard />
                  <FriendCard />
                  <FriendCard />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="6">
              <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block"> <b>Groups</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="7">
              <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block">My  <b>Courses</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  {cardData.map((item) => {
                    return (
                      <div key = {item.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4">
                            <Card {...item}  key = {item.id} />
                          </div>
                        )
                      })}
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="8">
                <div className="row">
                  <div class="card-body mb-3 pb-0"><h2 class="fw-400 font-lg d-block">Live<b> Channel</b> <a href="#" class="float-right"><i class="feather-edit text-grey-500 font-xs"></i></a></h2></div>
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                  <LiveCard />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </React.Fragment>
  )
}
