import React from 'react'
import {Accordion,Card} from 'react-bootstrap'

export default function AccCard(props) {
  return (
    <React.Fragment>
      <Card className="d-block border-0 rounded-lg overflow-hidden mt-2">
          <Card.Header className="bg-greylight theme-dark-bg">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={props.eventKey} className="bg-greylight">
              {props.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={props.eventKey}>
            <Card.Body>
              <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">1</span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">Introduction to the course</span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">12:34</span>
                </div>

                <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">2</span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">Watch the videos in HD mode only</span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">10:34</span>
                </div>

                <div className="card-body d-flex p-2">
                    <span className="bg-current btn-round-xs rounded-lg font-xssss text-white fw-600">3</span>
                    <span className="font-xssss fw-500 text-grey-500 ml-2">Watch the videos in HD mode only</span>
                    <span className="ml-auto font-xssss fw-500 text-grey-500">10:34</span>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
    </React.Fragment>
  )
}
