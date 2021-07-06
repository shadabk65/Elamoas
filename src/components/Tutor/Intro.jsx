import React from 'react'

export default function Intro(props) {
  return (
    <React.Fragment>
      <div className="row mt-4 mb-4">
        <div className="col-12 col-sm-6 ms-4">
          <h3 className='font-lg font-500'>Welcome {props.userName},</h3>
          <p className='italic'>This is the list of all the courses that you created.</p>
        </div>
      </div>
    </React.Fragment>
  )
}
