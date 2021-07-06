import React from 'react'
import {courses} from './dummy';
import CourseItem from './CourseItem';
export default function CourseList() {
  return (
    <React.Fragment>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
        <table className="table table-hover table-bordered">
          <thead>
            <tr className='bg-primary text-white'>
              <th scope="col"> <p className='table-title'> ID </p></th>
              <th scope="col"><p className='table-title'> Title </p></th>
              <th scope="col"><p className='table-title'> Date Created </p></th>
              <th scope="col"><p className='table-title'> Details </p></th>
              <th scope="col"><p className='table-title'> EDIT </p></th>
            </tr>
          </thead>
          <tbody>
            { courses.map((item) => {
              return <CourseItem {...item} key={item.id} />
            })}
            
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
