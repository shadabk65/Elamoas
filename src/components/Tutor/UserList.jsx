import React from 'react'
import {users} from './dummy';
import User from './User';
export default function UserList() {
  return (
    <React.Fragment>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
        <table class="table table-hover table-bordered ">
          <thead>
            <tr className='bg-primary text-white'>
              <th scope="col"><p className='table-title'>ID</p></th>
              <th scope="col"><p className='table-title'>Name</p></th>
              <th scope="col"><p className="table-title">Email</p></th>
              <th scope="col"><p className='table-title'>Phone Number</p> </th>
            </tr>
          </thead>
          <tbody>
            { users.map((item) => {
              return <User {...item} key={item.id} />
            })}
            
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}
