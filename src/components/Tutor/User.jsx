import React from 'react'

export default function User(props) {
  const {id,fullName,email,phoneNumber} = props;
  return (
    <>
      <tr>
        <th scope="col"> <p className='table-text'>{id}</p> </th>
        <th scope="col"><p className='table-text'>{fullName}</p></th>
        <th scope="col"><p className='table-text'>{email}</p></th>
        <th scope="col"><p className='table-text'>{phoneNumber}</p></th>
      </tr>
    </>
  )
}
