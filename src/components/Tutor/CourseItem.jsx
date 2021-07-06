import React from 'react'
import Link from 'next/link'
export default function User(props) {
  const {id,courseName,date,details} = props;
  return (
    <>
      <tr>
        <th scope="col"> <p className='table-text'>{id}</p> </th>
        <th scope="col"> <p className='table-text'>{courseName}</p></th>
        <th scope="col"> <p className='table-text'>{date}</p></th>
        <th scope="col">  <p className='table-text'>{details}</p></th>
        <th scope="col"><Link  href="/tutor/dashboard/editcourse"><a className="mt-4 btn btn-outline-success btn-md"> 
            <i className='fa fa-fw fa-edit'></i></a> 
          </Link>
        </th>
      </tr>
    </>
  )
}
