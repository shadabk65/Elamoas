import React from 'react'
import {Accordion,Card} from 'react-bootstrap'
import {data} from './data';
import AccCard from './AccCard';


export default function Acord() {
  return (
    <React.Fragment>
      <Accordion defaultActiveKey="0">
        {data.map((item)=> {
          return(
            <AccCard {...item}  key = {item.eventKey}/>
          )
        })}
      </Accordion>
    </React.Fragment>
  )
}
